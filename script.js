/* =========================================================
   TRISTAN EDWARDS — PORTFOLIO
   Vanilla JS — no dependencies
   ========================================================= */

   document.addEventListener('DOMContentLoaded', () => {
    initNavToggle();
    initReveal();
    initActiveNav();
    initTokenPanels();
  });
  
  /* ---------- Mobile nav toggle ---------- */
  function initNavToggle() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;
  
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  
    links.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        links.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  
  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    const targets = document.querySelectorAll('[data-reveal]');
    if (!targets.length) return;
  
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
  
    targets.forEach((el) => observer.observe(el));
  }
  
  /* ---------- Active nav link on scroll (home page sections) ---------- */
  function initActiveNav() {
    const navLinks = document.querySelectorAll('.nav-links a[href*="#"]');
    if (!navLinks.length) return;
  
    const sectionIds = Array.from(navLinks)
      .map((link) => link.getAttribute('href').split('#')[1])
      .filter(Boolean);
  
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
  
    if (!sections.length || !('IntersectionObserver' in window)) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove('is-active'));
            const match = document.querySelector(`.nav-links a[href*="#${entry.target.id}"]`);
            if (match) match.classList.add('is-active');
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
  
    sections.forEach((section) => observer.observe(section));
  }
  
  /* ---------- Design token panel ----------
     Reads this page's own CSS custom properties and renders
     them as live swatches. The portfolio's pitch is "I design
     systems and tokens" — this panel proves it rather than
     just claiming it.
  */
  function initTokenPanels() {
    const panels = document.querySelectorAll('.js-token-panel');
    if (!panels.length) return;
  
    const root = getComputedStyle(document.documentElement);
    const readVar = (name) => root.getPropertyValue(name).trim();
  
    const colorTokens = [
      ['--color-bg', 'bg'],
      ['--color-surface', 'surface'],
      ['--color-ink', 'ink'],
      ['--color-ink-soft', 'ink-soft'],
      ['--color-accent', 'accent'],
      ['--color-accent-ink', 'accent-ink'],
    ];
  
    const spacingTokens = [
      ['--space-2', '8'],
      ['--space-3', '12'],
      ['--space-4', '16'],
      ['--space-5', '24'],
      ['--space-6', '32'],
      ['--space-7', '48'],
    ];
  
    panels.forEach((panel) => {
      const colorWrap = panel.querySelector('.js-token-colors');
      const spacingWrap = panel.querySelector('.js-token-spacing');
      const typeWrap = panel.querySelector('.js-token-type');
  
      if (colorWrap) {
        colorWrap.innerHTML = colorTokens
          .map(([varName, label]) => {
            const value = readVar(varName);
            return `<span class="token-swatch"><span class="chip" style="background:${value}"></span>${label} · ${value}</span>`;
          })
          .join('');
      }
  
      if (spacingWrap) {
        spacingWrap.innerHTML = spacingTokens
          .map(([varName, px]) => {
            const value = readVar(varName);
            return `<span class="token-spacing-item"><span class="token-spacing-bar" style="height:${value}"></span><span>${px}px</span></span>`;
          })
          .join('');
      }
  
      if (typeWrap) {
        const display = readVar('--font-display').split(',')[0].replace(/'/g, '');
        const body = readVar('--font-body').split(',')[0].replace(/'/g, '');
        const mono = readVar('--font-mono').split(',')[0].replace(/'/g, '');
        typeWrap.innerHTML = `
          <div><span class="role">display</span><span style="font-family:var(--font-display); font-size:1.1rem;">${display} — Aa</span></div>
          <div><span class="role">body</span><span style="font-family:var(--font-body); font-size:1.1rem;">${body} — Aa</span></div>
          <div><span class="role">mono</span><span style="font-family:var(--font-mono); font-size:1.1rem;">${mono} — Aa</span></div>
        `;
      }
    });
  }