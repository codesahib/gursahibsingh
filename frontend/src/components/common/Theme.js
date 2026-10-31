import React, { createContext, useContext, useEffect, useState } from 'react';

const storageKey = 'notebook-theme';
const ThemeContext = createContext(null);
function readTheme() {
  try { return localStorage.getItem(storageKey) === 'day' ? 'light' : 'dark'; }
  catch { return 'dark'; }
}
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readTheme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#1d201f' : '#f4f1e9';
  }, [theme]);
  useEffect(() => {
    const sync = event => { if (event.key === storageKey || event.key === null) setTheme(readTheme()); };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);
  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem(storageKey, next === 'dark' ? 'night' : 'day'); }
    catch { /* Theme switching remains available without persistence. */ }
  }
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} aria-pressed={theme === 'dark'}>{theme === 'dark' ? '☀ Light mode' : '☾ Dark mode'}</button>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
