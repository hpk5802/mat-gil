import { useRef } from 'react';

const useDebounce = <T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number,
): ((...args: Parameters<T>) => void) => {
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const debouncedFunction = (...args: Parameters<T>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedFunction;
};

export default useDebounce;
