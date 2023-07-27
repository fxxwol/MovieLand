import {
  HomeWrap,
  HeroTitle,
  HeroText,
  HeroWrap,
  TextWrap,
  Btn,
  HeroImg,
} from 'styles/HomeHero.styled';
import { Link } from 'react-router-dom';
function HomeHero() {
  return (
    <HomeWrap>
      <HeroTitle>Welcome to Movie Land - Where Magic Meets Movies!</HeroTitle>
      <HeroWrap>
        <TextWrap>
          <HeroText>
            Lights, camera, and limitless entertainment await you here at Movie
            Land! Discover a captivating world of films, from classics to
            blockbusters, and join our vibrant community of movie lovers. Let
            the movie magic begin!
          </HeroText>
          <Btn component={Link} to={`movies`} variant="outlined" color="light">
            More Movies
          </Btn>
        </TextWrap>
        <HeroImg src={require('../img/pngwing.com.png')} alt="movie tape" />
      </HeroWrap>
    </HomeWrap>
  );
}

export default HomeHero;
