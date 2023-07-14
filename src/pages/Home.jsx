import React from 'react';
import { useState, useEffect } from 'react';
import { getTrending } from '../service/movieAPI';
import { Link, useLocation } from 'react-router-dom';

const Home = props => {
    const [movies, setMovies] = useState([]);
    const location = useLocation()

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
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{from: location}}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};


export default Home;
