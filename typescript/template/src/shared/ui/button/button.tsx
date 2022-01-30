import { FC, MouseEventHandler } from 'react';
import styles from './button.module.css';

interface Props {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<Props> = ({ className, children, onClick }) => {
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
