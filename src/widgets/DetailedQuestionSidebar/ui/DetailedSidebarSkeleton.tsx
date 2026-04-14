import styles from './DetailedSidebarSkeleton.module.css';

export const DetailedSidebarSkeleton = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.contentContainer}>
        <div className={styles.wrapper}>
          <div className={styles.skeletonTitle} />
          <div className={styles.badgeWrapper}>
            <div className={styles.skeletonBadge} />
            <div className={styles.skeletonBadge} />
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.skeletonTitle} />
          <div className={styles.badgeWrapper}>
            <div className={styles.skeletonButton} />
            <div className={styles.skeletonButton} />
            <div className={styles.skeletonButton} />
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.skeletonTitle} />
          <div className={styles.badgeWrapper}>
            <div className={styles.skeletonKeyword} />
            <div className={styles.skeletonKeyword} />
            <div className={styles.skeletonKeyword} />
          </div>
        </div>

        <div className={styles.skeletonAuthor} />
      </div>
    </aside>
  );
};
