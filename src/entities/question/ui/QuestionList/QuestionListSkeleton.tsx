import { QuestionItemSkeleton } from '../QuestionItem/QuestionItemSkeleton';

import styles from './QuestionList.module.css';

interface Props {
  count?: number;
}

export const QuestionListSkeleton = ({ count = 10 }: Props) => {
  return (
    <ul className={styles.accordionList}>
      {Array.from({ length: count }).map((_, index) => (
        <QuestionItemSkeleton key={index} />
      ))}
    </ul>
  );
};
