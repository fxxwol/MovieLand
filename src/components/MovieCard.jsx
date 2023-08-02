import { ImageListItem, ImageListItemBar } from '@mui/material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BASE_IMG_URL } from 'service/movieAPI';
import { ImageItem, MovieItem, SkeletonLoader } from 'styles/MovieCard.styled';

function MovieCard({ id, poster_path, title, path }) {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <MovieItem
      component={Link}
      to={path(id)}
      state={{ from: location }}
      key={id}
      sx={{ padding: '0', '&.MuiListItemButton-root': { display: 'block' } }}
    >
      {isLoading && <SkeletonLoader variant="rectangular" animation="wave" />}

      <ImageListItem
        sx={{
          width: '100%',
          position: 'unset',
          ...(isLoading && {
            position: 'absolute',
            width: '0px',
            height: '0px',
            margin: ' -1px',
            border: 0,
            padding: 0,
            overflow: 'hidden',
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
          onLoad={() => {
            setIsLoading(false);
          }}
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
