import { useNavigate } from 'react-router-dom';

import NotFoundImage from '@/shared/assets/images/not_found.svg';

import styles from './NotFoundPage.module.css';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img className={styles.img} src={NotFoundImage} alt="Not found" />
      <p className={styles.title}>Страница не найдена</p>
      <button className={styles.backBtn} onClick={() => void navigate(-1)}>
        Вернуться назад
      </button>
    </div>
  );
};
