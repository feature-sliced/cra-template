import { useCallback, useState } from 'react';

export const useCounter = (initialState: number) => {
  const [counter, setCounter] = useState(initialState);

  const increment = useCallback(() => setCounter((prev) => prev + 1), []);
  const decrement = useCallback(() => setCounter((prev) => prev - 1), []);

  return { counter, setCounter, increment, decrement };
};
