import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      let target;
      try { target = hash && document.getElementById(decodeURIComponent(hash.slice(1))); }
      catch { /* A malformed fragment should not prevent page navigation. */ }
      if (target) {
        if (target.tagName === 'DETAILS') target.open = true;
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
  return null;
}
