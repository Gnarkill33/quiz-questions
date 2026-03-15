import type { QuestionType } from '@/entities/question/model/types';
import { QuestionList } from '@/entities/question/ui/QuestionList/QuestionList';

import styles from './QuestionsBrowser.module.css';

interface Props {
  questions: QuestionType[];
}

export const QuestionsBrowser = ({ questions }: Props) => {
  return (
    <div className={styles.questionsContainer}>
      <h2 className={styles.questionsTitle}>Вопросы Специализация</h2>
      <QuestionList questions={questions} />
    </div>
  );
};
