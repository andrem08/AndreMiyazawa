// story.js - Renderização e interações da página "Além do currículo"
// O conteúdo vem de js/story-content.js (STORY, STORY_CERTS).

(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const get = (obj, path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);

  function storageGet(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }
  function storageSet(key, value) {
    try { localStorage.setItem(key, value); } catch { /* storage indisponível */ }
  }

  // Mesmo idioma do portfólio (chave 'lang' compartilhada) ou ?lang=
  function detectLang() {
    const param = new URLSearchParams(location.search).get('lang');
    if (param && STORY[param]) return param;
    const saved = storageGet('lang');
    if (saved && STORY[saved]) return saved;
    return (navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }

  let lang = detectLang();
  let repoCount = null;
  const t = () => STORY[lang];

  function render() {
    const s = t();
    document.documentElement.lang = s.htmlLang;
    document.title = s.title;

    $$('[data-s]').forEach(el => { const v = get(s, el.dataset.s); if (typeof v === 'string') el.textContent = v; });
    $$('[data-s-html]').forEach(el => { const v = get(s, el.dataset.sHtml); if (typeof v === 'string') el.innerHTML = v; });
    $$('.lang-toggle button').forEach(b => {
      const active = b.dataset.lang === lang;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', String(active));
    });

    $('#story-numbers').innerHTML = s.numbers.map((n, i) => `
      <div class="card stat reveal" style="--delay:${i * 0.08}s">
        <div class="stat-num gradient-text" data-count="${n.github && repoCount ? repoCount : n.value}"${n.github ? ' data-github' : ''}>${n.github && repoCount ? repoCount : n.value}</div>
        <div class="stat-label">${n.label}</div>
      </div>`).join('');

    $('#chapters').innerHTML = s.chapters.map(c => `
      <div class="timeline-item reveal">
        <span class="timeline-dot" aria-hidden="true"></span>
        <article class="card timeline-card chapter">
          <div class="chapter-head">
            <span class="skill-icon"><i class="${c.icon}"></i></span>
            <div>
              <span class="date-pill">${c.year}</span>
              <h3>${c.title}</h3>
            </div>
          </div>
          ${c.text.map(p => `<p>${p}</p>`).join('')}
        </article>
      </div>`).join('');

    $('#work').innerHTML = s.work.map((w, i) => `
      <div class="card work-card reveal" style="--delay:${(i % 4) * 0.07}s">
        <span class="highlight-icon"><i class="${w.icon}"></i></span>
        <h3>${w.title}</h3>
        <p>${w.text}</p>
      </div>`).join('');

    $('#quotes').innerHTML = s.quotes.map((q, i) => `
      <figure class="card quote reveal" style="--delay:${i * 0.1}s">
        <i class="fa-solid fa-quote-left quote-mark" aria-hidden="true"></i>
        <blockquote>${q.text}</blockquote>
        <figcaption>
          <span class="quote-avatar" aria-hidden="true">${q.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</span>
          <span><strong>${q.name}</strong><small>${q.role} · ${q.date}</small><small class="quote-source"><i class="fa-brands fa-linkedin"></i> ${s.quotesHead.source}</small></span>
        </figcaption>
      </figure>`).join('');

    $('#certs').innerHTML = STORY_CERTS.map((c, i) => `
      <div class="card cert reveal" style="--delay:${(i % 4) * 0.06}s">
        <span class="highlight-icon"><i class="${c.icon}"></i></span>
        <div>
          <h3>${c.name}</h3>
          <p>${c.issuer} · ${c.date[lang]}</p>
          ${c.id ? `<code>${s.certsHead.id} ${c.id}</code>` : ''}
        </div>
      </div>`).join('');

    $('#fun').innerHTML = s.fun.map((f, i) => `
      <div class="card fun-card reveal" style="--delay:${(i % 4) * 0.06}s">
        <span class="fun-icon"><i class="${f.icon}"></i></span>
        <h3>${f.title}</h3>
        <p>${f.text}</p>
      </div>`).join('');

    // Tempo de leitura estimado (~200 palavras/min)
    const words = $('main').innerText.split(/\s+/).length;
    $('#read-time').textContent = `${Math.max(1, Math.round(words / 200))} ${s.hero.read}`;

    observeReveals();
    bindCardGlow();
  }

  // ---------- Contadores ----------
  function animateCount(el) {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target) || reduceMotion) return;
    const start = performance.now();
    const step = now => {
      const p = Math.min((now - start) / 1300, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // ---------- Reveal ----------
  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return;
          e.target.classList.add('visible');
          $$('[data-count]', e.target).forEach(animateCount);
          observer.unobserve(e.target);
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    : null;

  function observeReveals() {
    $$('.reveal:not(.visible)').forEach(el => (observer ? observer.observe(el) : el.classList.add('visible')));
  }

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

  // Número de repositórios públicos ao vivo (mantém o valor padrão se a API falhar)
  async function loadRepoCount() {
    try {
      const res = await fetch('https://api.github.com/users/andrem08');
      if (!res.ok) return;
      const { public_repos: n } = await res.json();
      if (!Number.isFinite(n)) return;
      repoCount = n;
      $$('[data-github]').forEach(el => { el.dataset.count = n; el.textContent = n; });
    } catch { /* offline: mantém o valor padrão */ }
  }

  function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - innerHeight;
    $('#nav').classList.toggle('scrolled', y > 20);
    $('.scroll-progress').style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    const tl = $('#timeline');
    const r = tl.getBoundingClientRect();
    tl.style.setProperty('--progress', `${Math.min(Math.max((innerHeight * 0.6 - r.top) / r.height, 0), 1) * 100}%`);
  }

  function init() {
    $('#year').textContent = new Date().getFullYear();
    render();
    loadRepoCount();

    $$('.lang-toggle button').forEach(b => b.addEventListener('click', () => {
      if (b.dataset.lang === lang) return;
      lang = b.dataset.lang;
      storageSet('lang', lang);
      render();
      $$('.reveal').forEach(el => el.classList.add('visible'));
    }));

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { onScroll(); ticking = false; });
    }, { passive: true });
    onScroll();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
