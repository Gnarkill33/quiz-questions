import { useSearchParams } from 'react-router';

import { useFetchQuestionsQuery } from '@/entities/question/api/questionApi';
import { QuestionList } from '@/entities/question/ui/QuestionList/QuestionList';
import { Pagination } from '@/features/pagination';

import styles from './QuestionsBrowser.module.css';

export const QuestionsBrowser = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const { data, error, isLoading } = useFetchQuestionsQuery({ page: currentPage });
  const totalPages = data ? Math.ceil(data.total / data.limit) : 1;

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
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
