import type { QuestionType } from '@/entities/question/model/types';
import DefaultImage from '@/shared/assets/images/detailsDefault.svg';

import styles from './DetailedQuestionBrowser.module.css';

interface Props {
  question: QuestionType | undefined;
}

export const DetailedQuestionBrowser = ({ question }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <img src={question?.imageSrc || DefaultImage} alt="" className={styles.img} />
          <div>
            <h1 className={styles.title}>{question?.title}</h1>
            <span>{question?.description}</span>
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <button className={styles.navBtn}>
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.23809 0.180571C7.55259 0.450138 7.58901 0.923613 7.31944 1.23811L1.73781 7.75001L7.31944 14.2619C7.58901 14.5764 7.55259 15.0499 7.23809 15.3195C6.9236 15.589 6.45012 15.5526 6.18056 15.2381L0.180558 8.23811C-0.0601858 7.95724 -0.0601858 7.54279 0.180558 7.26192L6.18056 0.26192C6.45012 -0.0525743 6.9236 -0.0889955 7.23809 0.180571Z"
                fill="#5E5E5E"
              />
            </svg>
            <span>Предыдущий </span>
          </button>
          <button className={styles.navBtn}>
            <span>Следующий</span>
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.26192 0.180571C0.576414 -0.0889955 1.04989 -0.0525743 1.31946 0.26192L7.31946 7.26192C7.5602 7.54279 7.5602 7.95724 7.31946 8.23811L1.31946 15.2381C1.04989 15.5526 0.576414 15.589 0.26192 15.3195C-0.0525743 15.0499 -0.0889955 14.5764 0.180571 14.2619L5.76221 7.75001L0.180571 1.23811C-0.0889955 0.923613 -0.0525743 0.450138 0.26192 0.180571Z"
                fill="#5E5E5E"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.answerTitle}>Краткий ответ</h3>
        <span
          className={styles.answerBody}
          dangerouslySetInnerHTML={{
            __html: question?.shortAnswer || '',
          }}
        ></span>
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.answerTitle}>Развернутый ответ</h2>
        <span
          className={styles.answerBody}
          dangerouslySetInnerHTML={{
            __html: question?.longAnswer || '',
          }}
        ></span>
      </div>
    </div>
  );
};
