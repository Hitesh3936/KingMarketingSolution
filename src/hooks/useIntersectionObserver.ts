'use client';

import { useState, useEffect, RefObject } from 'react';

export function useIntersectionObserver(
  elementRef: RefObject<Element | null>,
  { threshold = 0.1, rootMargin = '0px', freezeOnceVisible = true } = {}
) {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([newEntry]: IntersectionObserverEntry[]): void => {
    setEntry(newEntry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

  }, [elementRef, threshold, rootMargin, frozen]);

  return {
    isIntersecting: !!entry?.isIntersecting,
    hasIntersected: !!entry?.isIntersecting || !!frozen,
    entry
  };
}
