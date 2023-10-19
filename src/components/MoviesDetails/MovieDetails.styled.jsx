import styled from 'styled-components';
import { breakpoints } from '../../styles/Theme';

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
    gap: 20px;
    justify-content: start;
    align-items: start;
  }
  @media ${desktop} {
    align-items: center;
    gap: 40px;
  }
`;

export const Div = styled.div`
  position: relative;
  @media ${tablet}{

    min-height: 550px;
  }
  @media ${desktop} {
    height: unset;
  }
`;


export const OverviewText = styled.p`
  margin-top: 10px;
`;

export const DetailsModal = styled.div`
  background-color: #000000;
  color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: rgba(3, 232, 144, 0.25) 0px 54px 55px,
    rgba(45, 212, 162, 0.668) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(5, 242, 49, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 35px;
  width: calc(100% - 40px);
  margin: 0 auto;

  @media ${mobileL} {
    width: 350px;
  }

  @media ${tablet} {
    width: 260px;
    gap: 20px;
    max-width: unset;
  }

  @media ${desktop} {
    width: 620px;
    height: 500px;
  }
`;
export const DetailItem = styled.li`
  display: flex;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const P = styled.p`
  width: 108px;
  font-weight: 500;
  line-height: 1.14;
  font-size: 15px;

  &.title {
    color: #b7b7b7;
    font-size: 17px;
  }

  @media ${desktop} {
    font-size: 17px;
    width: 124px;
    &.title {
      font-size: 18px;
    }
  }
`;

export const DetailsText = styled.ul`
  margin-top: 20px;
  width: 100%;
  font-size: 17px;
  font-weight: 500;
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 12px;
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
    position: relative;
  }

  @media ${desktop} {
    position: static;
    width: 400px;
  }
`;

export const Genres = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;
  width: 108px;

  @media ${mobileL} {
    width: 200px;
  }

  @media ${desktop} {
    gap: 10px;
    align-items: center;
    width: 300px;
  }
`;

export const MovieTtitle = styled.h1`
  font-size: 30px;
  margin: 20px 0;
`;
