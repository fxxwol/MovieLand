import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material';
import { theme } from '../styles/Theme';
import Footer from './Footer';
import { ContainerWrap } from 'styles/Common.styled';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContainerWrap maxWidth="xl">
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="movies/" element={<Movies />} />
              <Route path="movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Routes>
          
          <Footer />
        </div>

        <ToastContainer autoClose={3000} theme="colored" />
      </ContainerWrap>
    </ThemeProvider>
  );
};
