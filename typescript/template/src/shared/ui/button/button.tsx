import React from 'react';
import styles from './button.module.css';

interface Props {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = ({ className, children, onClick }) => (
  <button
    onClick={onClick}
    className={`${styles.button} ${className ? className : ''}`}
    // instead of this className defining you can use clsx/classnames or any other lib
  >
    {children}
  </button>
);
