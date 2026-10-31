// Apply the saved preference before React and styles load, avoiding a light flash.
(function () {
  var theme = 'dark';
  try { if (localStorage.getItem('notebook-theme') === 'day') theme = 'light'; }
  catch (error) { /* Default to dark when browser storage is unavailable. */ }
  document.documentElement.dataset.theme = theme;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = theme === 'dark' ? '#1d201f' : '#f4f1e9';
})();
