import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * On navigation: scroll to the #hash target if present (e.g. /#services from
 * another page), otherwise scroll to the top. Keeps SPA navigation feeling
 * like real page loads.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}
