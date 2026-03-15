import { useFetchQuestionsQuery } from '@/entities/question/api/questionApi';
import { Header } from '@/widgets/Header';
import { QuestionsBrowser } from '@/widgets/QuestionsBrowser';

export const BaseLayout = () => {
  const { data, error, isLoading } = useFetchQuestionsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load questions</div>;

  return (
    <>
      <Header />
      <main>
        <QuestionsBrowser questions={data?.data || []} />
      </main>
    </>
  );
};
