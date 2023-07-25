import React, { useEffect, useState } from 'react';
import { getVideo } from 'service/movieAPI';
import { useParams } from 'react-router-dom';
import { Player } from 'styles/Trailer.styled';

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
        return <img src={require('../img/player.png')} alt="default player" width={560}/>
    }

    if(status === 'resolved'){return (
      <Player
        src={'https://www.youtube.com/embed/' + key}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></Player>
    );}
  
    if (status === 'rejected') {
        return <img src={require('../img/video_error.png')} alt="error loading" width={560}/>
    }
}

export default Trailer;
