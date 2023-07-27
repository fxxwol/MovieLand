import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getImages } from 'service/movieAPI';
import { BASE_IMG_URL } from 'service/movieAPI';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import { SliderImage, SwiperWrap } from 'styles/ImageSlider.styled';

function ImageSlider() {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieImages() {
      try {
        const data = await getImages(movieId);
        setImages(data.backdrops);
        setStatus('resolved');
      } catch (e) {
        console.log(e);
        setStatus('rejected');
      }
    }
    getMovieImages();
    setStatus('pending');
  }, [movieId]);
  return (
    <SwiperWrap>
      <Swiper
        modules={[Navigation, Keyboard]}
        navigation={true}
        keyboard={true}
        speed={800}
        threshold={3}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
          },
          780: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
          },

          1200: {
            slidesPerView: 2,
            spaceBetween: 10,
            slidesPerGroup: 2,
          },
        }}
      >
        {images.map(({ file_path }) => {
          return (
            <SwiperSlide key={file_path}>
              <SliderImage src={BASE_IMG_URL + file_path} alt="slide" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperWrap>
  );
}

export default ImageSlider;
