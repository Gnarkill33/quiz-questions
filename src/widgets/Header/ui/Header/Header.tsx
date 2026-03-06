import clsx from 'clsx';

import LogoImage from '@/shared/assets/images/logo_img.svg';
import LogoTitle from '@/shared/assets/images/logo_title.svg';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logoWrapper}>
            <img src={LogoImage} alt="logo-image" />
            <img src={LogoTitle} alt="logo-title" />
          </div>
          <ul className={styles.nav}>
            <li className={styles.navItem}>База вопросов</li>
            <li className={styles.navItem}>Тренажер</li>
            <li className={styles.navItem}>Материалы</li>
            <li className={styles.navItem}>Навыки (hh)</li>
          </ul>
        </div>
        <div className={styles.btnWrapper}>
          <button className={clsx(styles.btn, styles.loginBtn)}>Вход</button>
          <button className={clsx(styles.btn, styles.signInBtn)}>Регистрация</button>
        </div>
      </div>
    </header>
  );
};
