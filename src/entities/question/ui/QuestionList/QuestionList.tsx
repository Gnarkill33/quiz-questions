import { useState } from 'react';

import type { QuestionType } from '@/entities/question/model/types';

import { QuestionItem } from '../QuestionItem/QuestionItem';

import styles from './QuestionList.module.css';

interface Props {
  questions: QuestionType[];
}

export const QuestionList = ({ questions }: Props) => {
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

  const toggleQuestion = (id: number): void => {
    setOpenQuestionId((prev) => (prev === id ? null : id));
  };

  return (
    <ul className={styles.accordionList}>
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          question={question}
          toggleQuestion={toggleQuestion}
          openQuestionId={openQuestionId}
        />
      ))}
    </ul>
  );
};
