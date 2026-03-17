import { Header } from '@/widgets/Header';
import { QuestionsBrowser } from '@/widgets/QuestionsBrowser';

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <main>
        <QuestionsBrowser />
      </main>
    </>
  );
};
