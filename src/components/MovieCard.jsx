import { useState } from 'react';
import { MovieItem, SkeletonLoader } from 'styles/Home.styled';
import { Link, useLocation } from 'react-router-dom';
import { ImageItem } from 'styles/Home.styled';
import { ImageListItem, ImageListItemBar } from '@mui/material';
import { BASE_IMG_URL } from 'service/movieAPI';

function MovieCard({ id, poster_path, title, path }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MovieItem
      component={Link}
      to={path(id)}
      state={{ from: location }}
      key={id}
      sx={{ padding: '0' }}
    >
      <SkeletonLoader
        variant="rectangular"
        sx={{
          ...(!isLoading && {
            display: 'none',
          }),
        }}
        animation='wave'
      />

      <ImageListItem
        sx={{
          width: '100%',
          position: 'unset',
          ...(isLoading && {
            display: 'none',
          }),
        }}
      >
        <ImageItem
          src={`${
            poster_path
              ? BASE_IMG_URL + poster_path
              : require('../img/default-poster.jpg')
          }`}
          alt={title}
          loading="lazy"
          onLoad={() => setIsLoading(false)}
        />
        <ImageListItemBar
          title={title}
          sx={{
            textAlign: 'center',
            background: 'rgba(0, 0, 0, 0.7)',
          }}
        />
      </ImageListItem>
    </MovieItem>
  );
}

export default MovieCard;
