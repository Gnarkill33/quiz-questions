import { LEVELS } from '@/shared/constants/constants';

import { Button } from '../Button/Button';

import styles from './LevelButtons.module.css';

export const LevelButtons = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Уровень сложности</p>
      <div className={styles.wrapper}>
        {LEVELS.map((level) => {
          return (
            <Button key={level} onClick={() => {}}>
              {level}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
