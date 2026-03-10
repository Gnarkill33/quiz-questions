import { QuestionItem } from '@/entities/question/ui/QuestionItem/QuestionItem';
import { Header } from '@/widgets/Header';

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <div>
        <QuestionItem />
      </div>
    </>
  );
};
