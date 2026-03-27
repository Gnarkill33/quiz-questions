import { createBrowserRouter } from 'react-router-dom';

import { DetailedQuestionPage } from '@/pages/detailed-question';
import { QuestionsPage } from '@/pages/question';

import { BaseLayout } from '../layouts/BaseLayout';

export const router = createBrowserRouter([
  {
    path: '/questions/public-questions',
    element: <BaseLayout />,
    children: [
      { index: true, element: <QuestionsPage /> },
      { path: ':id', element: <DetailedQuestionPage /> },
    ],
  },
]);
