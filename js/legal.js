// legal.js - Idioma e pequenos detalhes da página legal.html
// O conteúdo PT/EN fica no próprio HTML ([data-l="pt"] / [data-l="en"]).

(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const TITLES = {
    pt: 'Privacidade, Termos e Cookies — André Miyazawa',
    en: 'Privacy, Terms and Cookies — André Miyazawa'
  };

  function storageGet(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }
  function storageSet(key, value) {
    try { localStorage.setItem(key, value); } catch { /* storage indisponível */ }
  }

  function detectLang() {
    const param = new URLSearchParams(location.search).get('lang');
    if (param && TITLES[param]) return param;
    const saved = storageGet('lang');
    if (saved && TITLES[saved]) return saved;
    return (navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en';
  }

  function apply(lang) {
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    document.title = TITLES[lang];
    $$('.lang-toggle button').forEach(b => {
      const active = b.dataset.lang === lang;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', String(active));
    });
  }

  function init() {
    $('#year').textContent = new Date().getFullYear();
    apply(detectLang());
    $$('.lang-toggle button').forEach(b => b.addEventListener('click', () => {
      storageSet('lang', b.dataset.lang);
      apply(b.dataset.lang);
    }));

    window.addEventListener('scroll', () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      $('.scroll-progress').style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    }, { passive: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
