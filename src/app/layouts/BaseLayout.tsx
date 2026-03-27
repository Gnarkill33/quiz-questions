import { Outlet } from 'react-router-dom';

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
