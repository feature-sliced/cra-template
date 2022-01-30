import React from 'react';
import { Button } from 'shared/ui/button';
import { useCounter } from './model';
import styles from './styles.module.css';

export const CounterPage = () => {
  const { counter, increment, decrement } = useCounter(0);

  return (
    <div>
      <h1>Counter {counter}</h1>

      <Button className={styles.incrementButton} onClick={increment}>
        increment
      </Button>
      <Button onClick={decrement}>decrement</Button>
    </div>
  );
};
