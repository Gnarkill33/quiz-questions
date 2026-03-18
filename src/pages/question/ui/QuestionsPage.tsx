import { QuestionsBrowser } from '@/widgets/QuestionsBrowser';

import styles from './QuestionsPage.module.css';

export const QuestionsPage = () => {
  return (
    <section className={styles.pageContainer}>
      <QuestionsBrowser />
    </section>
  );
};
