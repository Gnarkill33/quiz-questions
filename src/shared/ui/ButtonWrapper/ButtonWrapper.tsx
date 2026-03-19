import type { ReactNode } from 'react';

import styles from './ButtonWrapper.module.css';

interface Props {
  children: ReactNode;
  title: string;
}

export const ButtonWrapper = ({ children, title }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};
