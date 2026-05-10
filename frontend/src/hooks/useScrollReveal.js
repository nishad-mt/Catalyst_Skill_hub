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
export function useScrollReveal(selector = '.reveal, .reveal-group', threshold = 0.02) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            const rect = entry.boundingClientRect;
            if (rect.top > window.innerHeight || rect.bottom < 0) {
              entry.target.classList.remove('visible');
            }
          }
        });
      },
      { threshold, rootMargin: '0px 0px -20px 0px' }
    );

    const observeElements = () => {
      const els = document.querySelectorAll(selector);
      els.forEach((el) => observer.observe(el));
    };

    // Initial observation
    // Small timeout to let React finish rendering
    const initTimer = setTimeout(observeElements, 50);

    let debounceTimer;
    // Use MutationObserver to catch elements added dynamically (like in Courses or after page changes)
    const mutationObserver = new MutationObserver(() => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        observeElements();
      }, 150);
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(initTimer);
      clearTimeout(debounceTimer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [selector, threshold]);
}
