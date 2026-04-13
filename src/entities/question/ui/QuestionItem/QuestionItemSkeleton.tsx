import styles from './QuestionItemSkeleton.module.css';

export const QuestionItemSkeleton = () => {
  return (
    <li className={styles.skeletonItem}>
      <div className={styles.skeletonTitleWrapper}>
        <div className={styles.skeletonCircle} />
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonIcon} />
      </div>
    </li>
  );
};
