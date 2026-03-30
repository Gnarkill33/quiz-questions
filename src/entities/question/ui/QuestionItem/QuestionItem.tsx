import clsx from 'clsx';
import { Link } from 'react-router-dom';

import type { QuestionType } from '@/entities/question/model/types';
import Arrow from '@/shared/assets/images/arrowNoCircle.svg';
import { Badge } from '@/shared/ui/Badge/Badge';

import styles from './QuestionItem.module.css';

interface Props {
  question: QuestionType;
  toggleQuestion: (id: number) => void;
  openQuestionId: number | null;
}

export const QuestionItem = ({ question, toggleQuestion, openQuestionId }: Props) => {
  return (
    <li className={styles.accordionItem}>
      <button aria-expanded="true" className={styles.accordionBtn} onClick={() => toggleQuestion(question.id)}>
        <div className={styles.accordionTitleWrapper}>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#5533FF" />
          </svg>
          <span className={styles.accordionTitle}>{question.title}</span>
          <svg
            className={clsx(openQuestionId === question.id ? styles.rotated : '')}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
      <div className={clsx(styles.accordionBody, openQuestionId === question.id ? '' : styles.hidden)}>
        <div className={styles.accordionEvalContainer}>
          <Badge title="Рейтинг:" evaluation={question.rate} />
          <Badge title="Сложность:" evaluation={question.complexity} />
        </div>
        {question.imageSrc && <img className={styles.questionImg} src={question.imageSrc} alt="Question image" />}
        <div
          className={styles.accordionText}
          dangerouslySetInnerHTML={{
            __html: question.shortAnswer,
          }}
        ></div>
        <Link to={`/questions/public-questions/${question.id}`} className={styles.accordionLink}>
          <span>Подробнее</span>
          <img src={Arrow} alt="arrow-right" />
        </Link>
      </div>
    </li>
  );
};
