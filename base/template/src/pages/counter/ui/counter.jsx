import React, { useState } from 'react';
import { Button } from 'shared/ui/button';
import styles from './counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter {counter}</h1>

      <Button
        className={styles.incrementButton}
        onClick={() => setCounter((prev) => prev + 1)}
      >
        increment
      </Button>
      <Button onClick={() => setCounter((prev) => prev - 1)}>decrement</Button>
    </div>
  );
};
