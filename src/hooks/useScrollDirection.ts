'use client';

import { useState, useEffect } from 'react';

export function useScrollDirection(threshold = 100) {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      
      // Determine if page has been scrolled
      setIsScrolled(scrollY > threshold);

      // Determine scroll direction
      if (Math.abs(scrollY - lastScrollY) < 5) {
        return; // minor scroll threshold to prevent flickering
      }
      
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && (scrollY > 10 || scrollY < lastScrollY)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection, { passive: true });
    
    // Initial call to set state correctly on load/refresh
    updateScrollDirection();

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection, threshold]);

  return { scrollDirection, isScrolled };
}
