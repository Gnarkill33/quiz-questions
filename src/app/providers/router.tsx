import { createBrowserRouter } from 'react-router';

import { QuestionsPage } from '@/pages/question';

import { BaseLayout } from '../layouts/BaseLayout';

export const router = createBrowserRouter([
  {
    path: '/questions/public-questions',
    element: <BaseLayout />,
    children: [{ index: true, Component: QuestionsPage }],
  },
]);
