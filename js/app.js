// app.js - Renderização, idioma e interações do portfólio
// O conteúdo vem de js/i18n.js (LANGUAGES, EXPERIENCE_META, ...).

(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const MAIN_EXPERIENCES = ['rede', 'itau', 'inmetro'];
  const MORE_EXPERIENCES = ['dasi', 'elite'];

  // ---------- Idioma ----------
  function storageGet(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }
  function storageSet(key, value) {
    try { localStorage.setItem(key, value); } catch { /* storage indisponível */ }
  }

  function detectLang() {
    const param = new URLSearchParams(location.search).get('lang');
    if (param && LANGUAGES[param]) return param;
    const saved = storageGet('lang');
    if (saved && LANGUAGES[saved]) return saved;
    return (navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }

  let lang = detectLang();
  const t = () => LANGUAGES[lang];
  const get = (obj, path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);

  // ---------- Renderização ----------
  function renderStatic() {
    $$('[data-i18n]').forEach(el => {
      const v = get(t(), el.dataset.i18n);
      if (typeof v === 'string') el.textContent = v;
    });
    $$('[data-i18n-html]').forEach(el => {
      const v = get(t(), el.dataset.i18nHtml);
      if (typeof v === 'string') el.innerHTML = v;
    });
    $$('[data-i18n-aria]').forEach(el => {
      const v = get(t(), el.dataset.i18nAria);
      if (typeof v === 'string') el.setAttribute('aria-label', v);
    });
    $$('.cv-link').forEach(a => (a.href = CV_LINKS[lang]));
    document.documentElement.lang = t().htmlLang;
    $$('.lang-toggle button').forEach(b => {
      const active = b.dataset.lang === lang;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', String(active));
    });
  }

  function renderMarquee() {
    const items = TECH_MARQUEE.map(i => `<span class="marquee-item"><i class="${i.icon}"></i>${i.name}</span>`).join('');
    $('#marquee-track').innerHTML = items + items; // duplicado para loop contínuo
  }

  function renderStats() {
    $('#stats-grid').innerHTML = t().stats.map((s, i) => `
      <div class="card stat reveal" style="--delay:${i * 0.08}s">
        <div class="stat-num gradient-text" data-count="${s.value}" data-suffix="${s.suffix}">${s.value}${s.suffix}</div>
        <div class="stat-label">${s.label}</div>
      </div>`).join('');
  }

  function renderAbout() {
    const a = t().about;
    $('#about-text').innerHTML = a.text.map(p => `<p>${p}</p>`).join('');
    $('#facts').innerHTML = a.facts.map(f => `
      <li>
        <span class="highlight-icon"><i class="${f.icon}"></i></span>
        <span><small>${f.label}</small><strong>${f.value}</strong></span>
      </li>`).join('');
  }

  function renderSkills() {
    $('#skills-dots').innerHTML = t().skills.cats.map((_, i) => `<span${i === 0 ? ' class="active"' : ''}></span>`).join('');
    $('#skills-grid').innerHTML = t().skills.cats.map((cat, i) => `
      <article class="card skill-card reveal" style="--delay:${(i % 3) * 0.08}s">
        <div class="skill-head">
          <span class="skill-icon"><i class="${SKILL_ICONS[i]}"></i></span>
          <h3>${cat}</h3>
        </div>
        <div class="chips">${SKILL_ITEMS[i].map(s => `<span class="chip">${s}</span>`).join('')}</div>
      </article>`).join('');
  }

  function experienceHTML(key) {
    const e = t().experience;
    const meta = EXPERIENCE_META[key];
    const item = e.items[key];
    const tools = item.tools || meta.tools || [];
    const toolsLabel = item.tools ? e.knowledgeLabel : e.toolsLabel;
    const longText = item.roles.reduce((n, r) => n + r.bullets.length, 0) > 4;

    const roles = item.roles.map(r => `
      <div class="role">
        <div class="role-head">
          <h4 class="role-title">${r.title}</h4>
          <span class="date-pill${r.current ? ' current' : ''}"><i class="fa-regular fa-calendar"></i>${r.date}</span>
        </div>
        <ul class="bullets">${r.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      </div>`).join('');

    return `
      <div class="timeline-item reveal" data-key="${key}">
        <span class="timeline-dot" aria-hidden="true"></span>
        <article class="card timeline-card${longText ? '' : ' expanded short'}">
          <div class="timeline-top">
            <img class="company-logo" src="${meta.logo}" alt="Logo ${meta.company}" width="58" height="58" loading="lazy" />
            <div>
              <h3 class="company-name">${meta.company}${meta.badge ? ` <span class="company-badge">${meta.badge}</span>` : ''}</h3>
              <p class="company-meta">${item.meta}</p>
            </div>
          </div>
          <div class="timeline-desc">${roles}</div>
          ${longText ? `<button class="read-more" type="button" aria-expanded="false"><span>${e.readMore}</span><i class="fa-solid fa-chevron-down"></i></button>` : ''}
          ${tools.length ? `
          <div class="tools">
            <p class="tools-label">${toolsLabel}</p>
            <div class="chips">${tools.map(s => `<span class="chip">${s}</span>`).join('')}</div>
          </div>` : ''}
        </article>
      </div>`;
  }

  function renderExperience() {
    $('#timeline-main').innerHTML = MAIN_EXPERIENCES.map(experienceHTML).join('');
    $('#timeline-more').innerHTML = MORE_EXPERIENCES.map(experienceHTML).join('');
    updateMoreBtn();
  }

  function renderProjects() {
    const p = t().projects;
    $('#projects-grid').innerHTML = PROJECTS.map((proj, i) => `
      <a class="card project-card reveal" style="--delay:${(i % 3) * 0.08}s" href="https://github.com/andrem08/${proj.repo}" target="_blank" rel="noopener">
        <div class="project-top">
          <span class="skill-icon"><i class="${proj.icon}"></i></span>
          <span class="project-link" aria-hidden="true"><i class="fa-brands fa-github"></i>${p.code}<i class="fa-solid fa-arrow-up-right-from-square"></i></span>
        </div>
        <h3>${proj.repo}</h3>
        <p>${p.items[proj.repo]}</p>
        <div class="chips">${proj.tags.map(s => `<span class="chip">${s}</span>`).join('')}</div>
      </a>`).join('');
  }

  function renderEducation() {
    const ed = t().education;
    $('#edu-text').innerHTML = ed.text.map(p => `<p>${p}</p>`).join('');
    $('#edu-tools').innerHTML = ed.tools.map(s => `<span class="chip">${s}</span>`).join('');
    const credItem = c => `<li><i class="${c.icon}"></i><span>${c.name}</span><span class="cred-year">${c.year}</span></li>`;
    $('#creds').innerHTML = CREDENTIALS.map(credItem).join('');
    $('#awards').innerHTML = ed.awards.map(credItem).join('');
  }

  function renderAll() {
    renderStatic();
    renderStats();
    renderAbout();
    renderSkills();
    renderExperience();
    renderProjects();
    renderEducation();
    observeReveals();
    bindCardGlow();
  }

  // ---------- Efeito de digitação (cargos) ----------
  let typeTimer;
  function startTyping() {
    clearTimeout(typeTimer);
    const el = $('#typed');
    const roles = t().hero.roles;
    if (reduceMotion) {
      el.textContent = roles[0];
      return;
    }
    let r = 0, c = 0, deleting = false;
    const tick = () => {
      const word = roles[r];
      c += deleting ? -1 : 1;
      el.textContent = word.slice(0, c);
      let delay = deleting ? 35 : 75;
      if (!deleting && c === word.length) { deleting = true; delay = 1800; }
      else if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; delay = 350; }
      typeTimer = setTimeout(tick, delay);
    };
    tick();
  }

  // ---------- Contadores ----------
  function animateCount(el) {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    if (!Number.isFinite(target) || reduceMotion) return;
    const duration = 1400;
    const start = performance.now();
    const step = now => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // ---------- Reveal on scroll ----------
  const revealObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          $$('[data-count]', entry.target).forEach(animateCount);
          revealObserver.unobserve(entry.target);
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })
    : null;

  function observeReveals() {
    $$('.reveal:not(.visible)').forEach(el => {
      if (revealObserver) revealObserver.observe(el);
      else el.classList.add('visible');
    });
  }

  // ---------- Glow que segue o mouse nos cards ----------
  function bindCardGlow() {
    $$('.card').forEach(card => {
      if (card.dataset.glow) return;
      card.dataset.glow = '1';
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--x', `${e.clientX - r.left}px`);
        card.style.setProperty('--y', `${e.clientY - r.top}px`);
      });
    });
  }

  // ---------- "Mais experiências" ----------
  function updateMoreBtn() {
    const open = $('#more-wrap').classList.contains('open');
    const e = t().experience;
    const btn = $('#more-btn');
    btn.querySelector('span').textContent = open ? e.lessBtn : e.moreBtn;
    btn.querySelector('i').className = `fa-solid fa-chevron-${open ? 'up' : 'down'}`;
    btn.setAttribute('aria-expanded', String(open));
  }

  // ---------- Toast ----------
  let toastTimer;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
  }

  // ---------- Scroll: navbar, progresso, timeline, seção ativa ----------
  function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    $('#nav').classList.toggle('scrolled', y > 20);
    $('.scroll-progress').style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    $('#to-top').classList.toggle('show', y > innerHeight * 0.8);

    const tl = $('#timeline');
    const rect = tl.getBoundingClientRect();
    const progress = Math.min(Math.max((innerHeight * 0.6 - rect.top) / rect.height, 0), 1);
    tl.style.setProperty('--progress', `${progress * 100}%`);
  }

  function setupActiveNav() {
    const links = $$('.nav-links a, .tabbar a');
    const sections = [...new Set(links.map(a => $(a.getAttribute('href'))).filter(Boolean))];
    const setActive = id => links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}` || (a.dataset.also || '').split(' ').includes(id)));
    const spy = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => spy.observe(s));
    // A última seção é curta demais para cruzar o centro da tela: ativa ao chegar no fim
    window.addEventListener('scroll', () => {
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) setActive('contact');
    }, { passive: true });
  }

  // ---------- Eventos ----------
  function bindEvents() {
    $$('.lang-toggle button').forEach(b => b.addEventListener('click', () => {
      if (b.dataset.lang === lang) return;
      lang = b.dataset.lang;
      storageSet('lang', lang);
      const moreOpen = $('#more-wrap').classList.contains('open');
      renderAll();
      $('#more-wrap').classList.toggle('open', moreOpen);
      updateMoreBtn();
      $$('.reveal').forEach(el => el.classList.add('visible'));
      startTyping();
    }));


    $('#more-btn').addEventListener('click', () => {
      const wrap = $('#more-wrap');
      wrap.classList.toggle('open');
      updateMoreBtn();
      if (wrap.classList.contains('open')) {
        $$('.reveal', wrap).forEach(el => el.classList.add('visible'));
      }
    });

    // Delegação: "ler mais" nos cards (sobrevive a re-renderizações)
    $('#timeline').addEventListener('click', e => {
      const btn = e.target.closest('.read-more');
      if (!btn) return;
      const card = btn.closest('.timeline-card');
      const open = card.classList.toggle('expanded');
      btn.setAttribute('aria-expanded', String(open));
      btn.querySelector('span').textContent = open ? t().experience.readLess : t().experience.readMore;
    });

    $('.copy-email').addEventListener('click', async e => {
      const email = e.currentTarget.dataset.email;
      try {
        await navigator.clipboard.writeText(email);
        toast(t().copied);
      } catch {
        location.href = `mailto:${email}`;
      }
    });

    const shareBtn = $('.share-btn');
    if (navigator.share) {
      shareBtn.hidden = false;
      shareBtn.addEventListener('click', () => {
        navigator.share({ title: document.title, text: t().hero.desc.replace(/<[^>]+>/g, ''), url: location.href.split('#')[0] }).catch(() => {});
      });
    }

    // Indicador de posição do carrossel de habilidades (celular)
    const grid = $('#skills-grid');
    grid.addEventListener('scroll', () => {
      const cards = grid.children;
      if (!cards.length) return;
      const idx = Math.round(grid.scrollLeft / (cards[0].offsetWidth + 14));
      $$('#skills-dots span').forEach((d, i) => d.classList.toggle('active', i === idx));
    }, { passive: true });

    $('#to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { onScroll(); ticking = false; });
    }, { passive: true });

    // Spotlight do hero segue o cursor
    const hero = $('#hero');
    if (!reduceMotion) {
      hero.addEventListener('pointermove', e => {
        const r = hero.getBoundingClientRect();
        hero.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
        hero.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
      });
    }

    // Imprimir: garante todo o conteúdo visível
    window.addEventListener('beforeprint', () => {
      $('#more-wrap').classList.add('open');
      $$('.timeline-card').forEach(c => c.classList.add('expanded'));
      $$('.reveal').forEach(el => el.classList.add('visible'));
    });
  }

  // ---------- Init ----------
  function init() {
    $('#year').textContent = new Date().getFullYear();
    renderMarquee();
    renderAll();
    bindEvents();
    setupActiveNav();
    startTyping();
    onScroll();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
