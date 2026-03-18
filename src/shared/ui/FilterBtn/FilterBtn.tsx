import type { ReactNode } from 'react';

import styles from './FilterBtn.module.css';

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export const FilterBtn = ({ children, onClick }: Props) => {
  return (
    <button className={styles.filterBtn} onClick={onClick}>
      {children}
    </button>
  );
};
