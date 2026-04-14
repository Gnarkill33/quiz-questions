import { QuestionListSkeleton } from '@/entities/question/ui/QuestionList/QuestionListSkeleton';

import styles from './QuestionsBrowser.module.css';

interface Props {
  isMobile?: boolean;
  count?: number;
}

export const QuestionsBrowserSkeleton = ({ isMobile, count = 10 }: Props) => {
  return (
    <div className={styles.questionsContainer}>
      <div className={styles.titleWrapper}>
        <div className={styles.skeletonTitle} />
        {isMobile && <div className={styles.skeletonButton} />}
      </div>

      <QuestionListSkeleton count={count} />

      <div className={styles.skeletonPagination} />
    </div>
  );
};
