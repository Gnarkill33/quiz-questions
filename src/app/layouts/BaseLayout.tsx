import { Outlet } from 'react-router';

import { Header } from '@/widgets/Header';

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
