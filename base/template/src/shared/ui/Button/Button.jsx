import React from 'react';
import styles from './button.module.css';

export const Button = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className ? className : ''}`}
      // instead of this className defining you can use clsx/classnames or any other lib
    >
      {children}
    </button>
  );
};
