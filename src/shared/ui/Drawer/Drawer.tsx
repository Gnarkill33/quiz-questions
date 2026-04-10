import clsx from 'clsx';
import type { ReactNode, RefObject } from 'react';

import styles from './Drawer.module.css';

interface Props {
  children: ReactNode;
  isSidebarOpen: boolean;
  ref: RefObject<HTMLDivElement | null>;
}

export const Drawer = ({ children, isSidebarOpen, ref }: Props) => {
  return (
    <div ref={ref} className={clsx(styles.drawer, isSidebarOpen ? styles.drawerVisible : '')}>
      {children}
    </div>
  );
};
