import { useState } from 'react';

import { useBodyScrollLock } from '@/shared/hooks/useBodyScrollLock';
import { useCheckMobile } from '@/shared/hooks/useCheckMobile';
import { Overlay } from '@/shared/ui/Overlay/Overlay';
import { QuestionsBrowser } from '@/widgets/QuestionsBrowser';
import { QuestionsFilters } from '@/widgets/QuestionsFilters';

import styles from './QuestionsPage.module.css';

export const QuestionsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onDesktopTransition = () => {
    setIsSidebarOpen(false);
  };

  const isMobile = useCheckMobile({ breakpoint: 900, onDesktopTransition });

  useBodyScrollLock(isSidebarOpen && isMobile);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSideBar = () => setIsSidebarOpen(false);

  return (
    <section className={styles.pageContainer}>
      <QuestionsBrowser isMobile={isMobile} openSidebar={openSidebar} />
      {isMobile ? (
        <Overlay closeSideBar={closeSideBar} isSidebarOpen={isSidebarOpen}>
          <QuestionsFilters />
        </Overlay>
      ) : (
        <QuestionsFilters />
      )}
    </section>
  );
};
