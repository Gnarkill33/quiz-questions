import styles from './QuestionItem.module.css';

export const QuestionItem = () => {
  return (
    <div>
      <li className={styles.accordionItem}>
        <button aria-expanded="true" className={styles.accordionBtn}>
          <div className={styles.accordionTitleWrapper}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#5533FF" />
            </svg>
            <span className={styles.accordionTitle}>Title</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 15L12 9L18 15"
                stroke="#6A0BFF"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        <div className={styles.accordionBody}>
          <div className={styles.accordionEvalContainer}>
            <p className={styles.accordionEvalWrapper}>
              Рейтинг:
              <span className={styles.accordionEval}>4</span>
            </p>
            <p className={styles.accordionEvalWrapper}>
              Сложность:
              <span className={styles.accordionEval}>complexity</span>
            </p>
          </div>
          <img className={styles.questionImg} src="imageSrc" alt="Question image" />
          {/* <div
            className={styles.accordionText}
            dangerouslySetInnerHTML={{
              __html: question.shortAnswer,
            }}
          ></div> */}
        </div>
      </li>
    </div>
  );
};
