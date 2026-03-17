import { useState } from 'react';

import { useFetchQuestionsQuery } from '@/entities/question/api/questionApi';
import { QuestionList } from '@/entities/question/ui/QuestionList/QuestionList';
import { Pagination } from '@/features/pagination';

import styles from './QuestionsBrowser.module.css';

export const QuestionsBrowser = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading } = useFetchQuestionsQuery();

  const totalPages = data ? Math.ceil(data.total / data.limit) : 1;

  const handlePageChange = (newPage: number) => {
    if (newPage === currentPage) return;
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load questions</div>;

  return (
    <div className={styles.questionsContainer}>
      <h2 className={styles.questionsTitle}>Вопросы Специализация</h2>
      <QuestionList questions={data?.data || []} />
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};
