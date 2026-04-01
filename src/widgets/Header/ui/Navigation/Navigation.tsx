import clsx from 'clsx';

import styles from './Navigation.module.css';

interface Props {
  isDropDownMenu?: boolean;
}

export const Navigation = ({ isDropDownMenu }: Props) => {
  return (
    <ul className={clsx(styles.nav, isDropDownMenu ? styles.dropDown : '')}>
      <li className={styles.navItem}>База вопросов</li>
      <li className={styles.navItem}>Тренажер</li>
      <li className={styles.navItem}>Материалы</li>
      <li className={styles.navItem}>Навыки (hh)</li>
    </ul>
  );
};
