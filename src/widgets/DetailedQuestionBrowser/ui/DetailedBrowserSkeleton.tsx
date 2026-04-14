import styles from './DetailedBrowserSkeleton.module.css';

interface Props {
  isMobile?: boolean;
}

export const DetailedBrowserSkeleton = ({ isMobile = false }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.skeletonImg} />
          <div className={styles.titleContainer}>
            <div className={styles.topBlock}>
              <div className={styles.skeletonTitle} />
              {isMobile && <div className={styles.skeletonToggleBtn} />}
            </div>
            <div className={styles.skeletonDescription} />
          </div>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.buttonWrapper}>
          <div className={styles.skeletonNavBtn}></div>
          <div className={styles.skeletonNavBtn}></div>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.skeletonAnswerTitle} />
        <div className={styles.skeletonAnswerLine} />
        <div className={styles.skeletonAnswerLine} />
        <div className={styles.skeletonAnswerLineShort} />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.skeletonAnswerTitle} />
        <div className={styles.skeletonAnswerLine} />
        <div className={styles.skeletonAnswerLine} />
        <div className={styles.skeletonAnswerLine} />
        <div className={styles.skeletonAnswerLineShort} />
      </div>
    </div>
  );
};
