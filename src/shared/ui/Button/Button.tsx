import clsx from 'clsx';
import type { ReactNode } from 'react';

import DefaultImage from '@/shared/assets/images/defaultImg.svg';

import styles from './Button.module.css';

interface Props {
  children: ReactNode;
  image?: string;
  onClick?: () => void;
  selected: boolean;
}

export const Button = ({ children, image, onClick, selected }: Props) => {
  return (
    <button className={clsx(styles.filterBtn, selected ? styles.active : '')} onClick={onClick}>
      {image && <img className={styles.img} src={image ? image : DefaultImage} alt="skill-logo" />}
      {children}
    </button>
  );
};
