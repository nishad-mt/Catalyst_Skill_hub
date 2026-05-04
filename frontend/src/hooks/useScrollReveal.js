// src/hooks/useScrollReveal.js
// Attaches IntersectionObserver to any elements with class "reveal"
// Call this once in App.jsx after the DOM mounts.

import { useEffect } from 'react';

/**
 * Observes all elements with the class `reveal` and adds `visible`
 * when they enter the viewport, triggering the CSS fade-up transition.
 *
 * @param {string}  selector  - CSS selector to observe (default: '.reveal')
 * @param {number}  threshold - Intersection ratio to trigger (default: 0.12)
 */
export function useScrollReveal(selector = '.reveal', threshold = 0.12) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, threshold]);
}
