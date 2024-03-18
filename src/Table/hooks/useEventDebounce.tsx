import { MutableRefObject, useCallback, useRef } from 'react';

// eslint-disable @typescript-eslint/no-explicit-any

const useEventDebounce = (
  callback: (...args: any[]) => void,
  delay: number,
) => {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
};

export default useEventDebounce;
