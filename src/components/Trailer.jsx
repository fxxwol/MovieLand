import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVideo } from 'service/movieAPI';
import { Player, VideoImg } from 'styles/Trailer.styled';

function Trailer() {
  const { movieId } = useParams();
  const [status, setStatus] = useState('');
  const [key, setKey] = useState('');

  useEffect(() => {
    async function getTrailer() {
      try {
        const data = await getVideo(movieId);
        const res = data.results;
        const trailer = res.find(
          ({ official, type }) => official && type === 'Trailer'
        );
        setKey(trailer.key);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
      }
    }
    getTrailer();
    setStatus('pending');
  }, [movieId]);

  if (status === 'pending') {
    return (
      <VideoImg
        src={require('../img/Grey-Screen-of-Death.jpg')}
        alt="default player"
      />
    );
  }

  if (status === 'resolved') {
    return (
      <Player
        src={'https://www.youtube.com/embed/' + key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        id='iframe'
      ></Player>
    );
  }

  if (status === 'rejected') {
    return (
      <VideoImg
        src={require('../img/video_error.png')}
        alt="error loading"
      />
    );
  }
}

export default Trailer;
