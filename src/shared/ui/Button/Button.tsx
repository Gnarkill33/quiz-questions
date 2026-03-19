import type { ReactNode } from 'react';

import DefaultImage from '@/shared/assets/images/defaultImg.svg';

import styles from './Button.module.css';

interface Props {
  children: ReactNode;
  image?: string;
  onClick: () => void;
}

export const Button = ({ children, image, onClick }: Props) => {
  return (
    <button className={styles.filterBtn} onClick={onClick}>
      {image && <img className={styles.img} src={image ? image : DefaultImage} alt="skill-logo" />}
      {children}
    </button>
  );
};
