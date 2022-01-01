import { useState } from 'react';
import { Button } from 'shared/ui/button';
import styles from './ui.module.css';

export const CounterPage = () => {
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
