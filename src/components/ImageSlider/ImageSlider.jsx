import { SliderImage, SliderSkeleton, SwiperWrap } from 'components/ImageSlider/ImageSlider.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_IMG_URL, getImages } from 'service/movieAPI';
import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import { Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function ImageSlider() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieImages() {
      try {
        const data = await getImages(movieId);
        setImages(data.backdrops);

      } catch (e) {
        console.log(e);

      }
    }
    getMovieImages();

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
              {isLoading && (
                <SliderSkeleton
                  variant="rectangular"
                />
              )}
              <SliderImage
                src={BASE_IMG_URL + file_path}
                alt="slide"
                loading="lazy"
                onLoad={() => {
                  setIsLoading(false);
                }}
                isLoading={isLoading}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperWrap>
  );
}

export default ImageSlider;
