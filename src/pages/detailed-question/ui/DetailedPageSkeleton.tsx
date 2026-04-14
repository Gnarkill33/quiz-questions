import { DetailedBrowserSkeleton } from '@/widgets/DetailedQuestionBrowser/ui/DetailedBrowserSkeleton';
import { DetailedSidebarSkeleton } from '@/widgets/DetailedQuestionSidebar/ui/DetailedSidebarSkeleton';

import styles from './DetailedQuestionPage.module.css';

interface Props {
  isMobile: boolean;
}

export const DetailedPageSkeleton = ({ isMobile }: Props) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.backBtnSkeleton} />

      <div className={styles.pageContainer}>
        <DetailedBrowserSkeleton isMobile={isMobile} />

        {!isMobile && <DetailedSidebarSkeleton />}
      </div>
    </section>
  );
};
