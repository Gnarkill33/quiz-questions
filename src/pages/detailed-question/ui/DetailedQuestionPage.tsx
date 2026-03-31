import clsx from 'clsx';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useFetchQuestionByIdQuery } from '@/entities/question/api/questionApi';
import { useBodyScrollLock } from '@/shared/hooks/useBodyScrollLock';
import { useCheckMobile } from '@/shared/hooks/useCheckMobile';
import { useClickOutside } from '@/shared/hooks/useClickOutside';
import { DetailedQuestionBrowser } from '@/widgets/DetailedQuestionBrowser';
import { DetailedQuestionSidebar } from '@/widgets/DetailedQuestionSidebar';

import styles from './DetailedQuestionPage.module.css';

export const DetailedQuestionPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading, error } = useFetchQuestionByIdQuery(Number(id));

  const onDesktopTransition = () => {
    setIsSidebarOpen(false);
  };

  const isMobile = useCheckMobile({ breakpoint: 768, onDesktopTransition });

  useBodyScrollLock(isSidebarOpen && isMobile);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSideBar = () => setIsSidebarOpen(false);

  const ref = useClickOutside(closeSideBar);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load questions</div>;
  if (!data) return <div>Failed to find question</div>;

  return (
    <section className={styles.wrapper}>
      <button className={styles.backBtn} onClick={() => void navigate(-1)}>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.31768 12.6832C7.37575 12.7412 7.42181 12.8102 7.45324 12.886C7.48466 12.9619 7.50084 13.0432 7.50084 13.1253C7.50084 13.2075 7.48466 13.2888 7.45324 13.3647C7.42181 13.4405 7.37575 13.5095 7.31768 13.5675C7.25961 13.6256 7.19067 13.6717 7.1148 13.7031C7.03893 13.7345 6.95761 13.7507 6.87549 13.7507C6.79337 13.7507 6.71205 13.7345 6.63618 13.7031C6.56031 13.6717 6.49137 13.6256 6.4333 13.5675L0.183304 7.31754C0.125194 7.25949 0.0790947 7.19056 0.047642 7.11469C0.0161893 7.03881 0 6.95748 0 6.87535C0 6.79321 0.0161893 6.71188 0.047642 6.63601C0.0790947 6.56014 0.125194 6.49121 0.183304 6.43316L6.4333 0.18316C6.55058 0.0658846 6.70964 -3.26935e-09 6.87549 0C7.04134 3.26935e-09 7.2004 0.0658846 7.31768 0.18316C7.43495 0.300435 7.50084 0.459495 7.50084 0.625347C7.50084 0.7912 7.43495 0.95026 7.31768 1.06753L1.50909 6.87535L7.31768 12.6832Z"
            fill="#6A0BFF"
          />
        </svg>
        <span>Назад</span>
      </button>
      <div className={styles.pageContainer}>
        <DetailedQuestionBrowser question={data} openSidebar={openSidebar} isMobile={isMobile} />
        {!isMobile && <DetailedQuestionSidebar question={data} />}
        {isMobile && (
          <div ref={ref} className={clsx(styles.overlay, isSidebarOpen ? styles.overlayVisible : '')}>
            <button className={styles.closeBtn} onClick={closeSideBar}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.31692 6.43305C7.07284 6.18897 6.67711 6.18897 6.43303 6.43305C6.18896 6.67712 6.18896 7.07285 6.43303 7.31693L8.07443 8.95833L6.43305 10.5997C6.18897 10.8438 6.18897 11.2395 6.43305 11.4836C6.67713 11.7277 7.07286 11.7277 7.31693 11.4836L8.95832 9.84221L10.5997 11.4836C10.8438 11.7277 11.2395 11.7277 11.4836 11.4836C11.7276 11.2395 11.7276 10.8438 11.4836 10.5997L9.8422 8.95833L11.4836 7.31695C11.7277 7.07287 11.7277 6.67714 11.4836 6.43306C11.2395 6.18898 10.8438 6.18898 10.5997 6.43306L8.95832 8.07445L7.31692 6.43305Z"
                  fill="#F3164E"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.95833 0C4.01078 0 0 4.01078 0 8.95833C0 13.9059 4.01078 17.9167 8.95833 17.9167C13.9059 17.9167 17.9167 13.9059 17.9167 8.95833C17.9167 4.01078 13.9059 0 8.95833 0ZM1.25 8.95833C1.25 4.70114 4.70114 1.25 8.95833 1.25C13.2155 1.25 16.6667 4.70114 16.6667 8.95833C16.6667 13.2155 13.2155 16.6667 8.95833 16.6667C4.70114 16.6667 1.25 13.2155 1.25 8.95833Z"
                  fill="#F3164E"
                />
                <path
                  d="M7.31692 6.43305C7.07284 6.18897 6.67711 6.18897 6.43303 6.43305C6.18896 6.67712 6.18896 7.07285 6.43303 7.31693L8.07443 8.95833L6.43305 10.5997C6.18897 10.8438 6.18897 11.2395 6.43305 11.4836C6.67713 11.7277 7.07286 11.7277 7.31693 11.4836L8.95832 9.84221L10.5997 11.4836C10.8438 11.7277 11.2395 11.7277 11.4836 11.4836C11.7276 11.2395 11.7276 10.8438 11.4836 10.5997L9.8422 8.95833L11.4836 7.31695C11.7277 7.07287 11.7277 6.67714 11.4836 6.43306C11.2395 6.18898 10.8438 6.18898 10.5997 6.43306L8.95832 8.07445L7.31692 6.43305Z"
                  stroke="#F3164E"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.95833 0C4.01078 0 0 4.01078 0 8.95833C0 13.9059 4.01078 17.9167 8.95833 17.9167C13.9059 17.9167 17.9167 13.9059 17.9167 8.95833C17.9167 4.01078 13.9059 0 8.95833 0ZM1.25 8.95833C1.25 4.70114 4.70114 1.25 8.95833 1.25C13.2155 1.25 16.6667 4.70114 16.6667 8.95833C16.6667 13.2155 13.2155 16.6667 8.95833 16.6667C4.70114 16.6667 1.25 13.2155 1.25 8.95833Z"
                  stroke="#F3164E"
                />
              </svg>
            </button>
            <DetailedQuestionSidebar question={data} />
          </div>
        )}
      </div>
    </section>
  );
};
