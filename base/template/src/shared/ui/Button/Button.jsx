import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

export const Button = (props) => {
  return (
    <button {...props} className={clsx(styles.button, props.className)}>
      {props.children}
    </button>
  );
};
