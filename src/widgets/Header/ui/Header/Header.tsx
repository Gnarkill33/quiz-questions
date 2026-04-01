import clsx from 'clsx';
import { useEffect, useState } from 'react';

import LogoImage from '@/shared/assets/images/logo_img.svg';
import LogoTitle from '@/shared/assets/images/logo_title.svg';
import { useCheckMobile } from '@/shared/hooks/useCheckMobile';

import { Navigation } from '../Navigation/Navigation';

import styles from './Header.module.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropDownMenu, setIsDropDownMenu] = useState(false);
  const isMobile = useCheckMobile({ breakpoint: 768 });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropDownMenu = () => setIsDropDownMenu(!isDropDownMenu);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropDownMenu(false);
  };

  useEffect(() => {
    window.addEventListener('resize', closeMenu);

    return () => window.removeEventListener('resize', closeMenu);
  });

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logoWrapper}>
            <img src={LogoImage} className={styles.logoImg} alt="logo-image" />
            <img src={LogoTitle} className={styles.logoTitleImg} alt="logo-title" />
          </div>
          {isMobile && (
            <button className={styles.dropDownBtn} onClick={toggleDropDownMenu}>
              Подготовка
              <svg
                className={clsx(styles.arrowImg, isDropDownMenu ? styles.rotated : '')}
                width="16"
                height="8"
                viewBox="0 0 16 8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.180571 0.26192C0.450138 -0.0525743 0.923613 -0.0889955 1.23811 0.180571L7.75001 5.76221L14.2619 0.180572C14.5764 -0.0889949 15.0499 -0.0525737 15.3195 0.261921C15.589 0.576415 15.5526 1.04989 15.2381 1.31946L8.23811 7.31946C7.95724 7.5602 7.54279 7.5602 7.26192 7.31946L0.26192 1.31946C-0.0525743 1.04989 -0.0889955 0.576414 0.180571 0.26192Z"
                />
              </svg>
            </button>
          )}
          {isDropDownMenu && <Navigation isDropDownMenu={isDropDownMenu} />}
          {!isMobile && <Navigation />}
        </div>

        <button className={styles.burgerBtn} onClick={toggleMenu}>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>

        <div className={styles.btnWrapper}>
          <button className={clsx(styles.btn, styles.loginBtn)}>Вход</button>
          <button className={clsx(styles.btn, styles.signInBtn)}>Регистрация</button>
        </div>
      </div>

      {isMenuOpen && <button className={styles.authBtn}>Войти</button>}
    </header>
  );
};
