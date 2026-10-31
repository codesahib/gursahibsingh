(() => {
  const storageKey = 'notebook-theme';
  let theme = 'dark';
  try {
    if (localStorage.getItem(storageKey) === 'day') theme = 'light';
  } catch { /* Dark remains the default when storage is unavailable. */ }

  function applyTheme(nextTheme) {
    theme = nextTheme;
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#1d201f' : '#f4f1e9';
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.textContent = theme === 'dark' ? '\u2600 Light mode' : '\u263e Dark mode';
      button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    });
  }

  applyTheme(theme);
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(theme);
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.addEventListener('click', () => {
        applyTheme(theme === 'dark' ? 'light' : 'dark');
        try {
          localStorage.setItem(storageKey, theme === 'dark' ? 'night' : 'day');
        } catch { /* Theme switching works without persistence. */ }
      });
    });
  });

  window.addEventListener('storage', event => {
    if (event.key === storageKey || event.key === null) {
      applyTheme(event.key === storageKey && event.newValue === 'day' ? 'light' : 'dark');
    }
  });
})();
