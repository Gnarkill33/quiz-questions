import type { ReactNode } from 'react';

import styles from './NotFoundBlock.module.css';

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

export const NotFoundBlock = ({ title, description, children }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p>{description}</p>
      {children}
    </div>
  );
};
