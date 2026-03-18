import { QuestionsBrowser } from '@/widgets/QuestionsBrowser';
import { QuestionsFilters } from '@/widgets/QuestionsFilters';

import styles from './QuestionsPage.module.css';

export const QuestionsPage = () => {
  return (
    <section className={styles.pageContainer}>
      <QuestionsBrowser />
      <QuestionsFilters />
    </section>
  );
};
