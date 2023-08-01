import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link, Navigation } from '../styles/Layout.styled';
import { Loader } from './Loader';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
