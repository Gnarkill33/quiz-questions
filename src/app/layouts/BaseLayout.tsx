import { QuestionList } from '@/entities/question/ui/QuestionList/QuestionList';
import { Header } from '@/widgets/Header';

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <main>
        <QuestionList questions={[]} />
      </main>
    </>
  );
};
