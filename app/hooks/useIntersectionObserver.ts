import { useCallback, useRef } from 'react';

const useIntersectionObserver = (callback: () => void, hasNext: boolean) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const endRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node || !hasNext) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      });

      observer.current.observe(node);
    },
    [callback, hasNext],
  );

  return endRef;
};

export default useIntersectionObserver;
