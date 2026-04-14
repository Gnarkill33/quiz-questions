import { useState } from 'react';

import { useBodyScrollLock } from '@/shared/hooks/useBodyScrollLock';
import { useCheckMobile } from '@/shared/hooks/useCheckMobile';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { CloseButton } from '@/shared/ui/CloseButton/CloseButton';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { QuestionsBrowser } from '@/widgets/QuestionsBrowser';
import { QuestionsFilters } from '@/widgets/QuestionsFilters';

import styles from './QuestionsPage.module.css';

export const QuestionsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onDesktopTransition = () => setIsSidebarOpen(false);
  const isMobile = useCheckMobile({ breakpoint: 900, onDesktopTransition });

  useBodyScrollLock(isSidebarOpen && isMobile);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSideBar = () => setIsSidebarOpen(false);
  const ref = useClickOutside(closeSideBar);

  return (
    <section className={styles.pageContainer}>
      <QuestionsBrowser isMobile={isMobile} openSidebar={openSidebar} />
      {isMobile ? (
        <Drawer ref={ref} isSidebarOpen={isSidebarOpen}>
          <CloseButton onClose={closeSideBar} />
          <QuestionsFilters />
        </Drawer>
      ) : (
        <QuestionsFilters />
      )}
    </section>
  );
};
