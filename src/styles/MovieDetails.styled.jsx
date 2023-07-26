import styled from 'styled-components';
import { breakpoints } from './Theme';

const { _, mobileL, tablet, desktop } = breakpoints;

export const Details = styled.div`
  margin: 15px 0 30px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  @media ${tablet} {
    margin: 30px 0;
    flex-direction: row;
    gap: 40px;
    justify-content: start;
    align-items: center;
  }
`;

export const MovieImg = styled.img`
  width: 100%;
  max-width: 320px;

  @media ${mobileL} {
    max-width: 480px;
  }

  @media ${tablet} {
    width: 300px;
    max-width: unset;
  }

  @media ${desktop} {
    width: 500px;
  }
`;

export const Genres = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const MovieTtitle = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`;
