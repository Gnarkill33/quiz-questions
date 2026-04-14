import { createBrowserRouter } from 'react-router-dom';

import { DetailedQuestionPage } from '@/pages/detailed-question-page';
import { NotFoundPage } from '@/pages/not-found-page';
import { QuestionsPage } from '@/pages/question-page';

import { BaseLayout } from '../layouts/BaseLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      { index: true, element: <QuestionsPage /> },
      { path: 'questions/:id', element: <DetailedQuestionPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
