import { createBrowserRouter } from 'react-router';

import { BaseLayout } from '../layouts/BaseLayout';

export const router = createBrowserRouter([
  {
    path: '/questions/public-questions',
    element: <BaseLayout />,
  },
]);
