import { useSearchParams } from 'react-router';

import { useAppSelector } from '@/app/providers/store';
import { QuestionList } from '@/entities/question';
import { useFetchQuestionsQuery } from '@/entities/question/api/questionApi';
import { Pagination } from '@/features/pagination';

import styles from './QuestionsBrowser.module.css';

export const QuestionsBrowser = () => {
  const filters = useAppSelector((state) => state.filters);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const { data, error, isLoading } = useFetchQuestionsQuery({
    specializationSlug: filters.specializationSlug,
    page: currentPage,
  });

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
