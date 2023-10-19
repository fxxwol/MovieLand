import { ThemeProvider } from '@mui/material';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContainerWrap } from 'styles/Common.styled';
import { theme } from '../styles/Theme';
import Footer from './Footer/Footer';
import Layout from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('./MoviesDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

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
