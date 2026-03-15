import { useFetchQuestionsQuery } from '@/entities/question/api/questionApi';
import { QuestionList } from '@/entities/question/ui/QuestionList/QuestionList';
import { Header } from '@/widgets/Header';

export const BaseLayout = () => {
  const { data, error, isLoading } = useFetchQuestionsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Failed to load questions</div>;

  return (
    <>
      <Header />
      <main>
        <QuestionList questions={data?.data || []} />
      </main>
    </>
  );
};
