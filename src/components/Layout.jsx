import React from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader';
import { Suspense } from 'react';
import { Navigation, Link, Header } from '../styles/Layout.styled';

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
