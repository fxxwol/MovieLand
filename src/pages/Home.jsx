import React from 'react';
import { useState, useEffect } from 'react';
import { getTrending } from '../service/movieAPI';
import { Link, useLocation } from 'react-router-dom';
import { ListItemButton, ListItemText } from '@mui/material';
import { H1 } from 'styles/Home.styled';
import { Wrap } from 'styles/Movies.styled';

const Home = props => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const data = await getTrending();
        setMovies(data.results);
      } catch (e) {
        console.log(e);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <>
      <H1 variant="h1">Trending today</H1>
      <Wrap>
        {movies.map(({ id, title }) => (
          <ListItemButton
            component={Link}
            to={`movies/${id}`}
            state={{ from: location }}
            key={id}
            divider={true}
            disableGutters={true}
          >
            <ListItemText primary={title} />
          </ListItemButton>
        ))}
      </Wrap>
    </>
  );
};

export default Home;
