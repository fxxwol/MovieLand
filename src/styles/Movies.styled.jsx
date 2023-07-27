import styled from 'styled-components';
import { breakpoints } from './Theme';

const { _, mobileL, tablet, desktop } = breakpoints;

export const Wrap = styled.div`
  margin: 30px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  align-content: center;
`;

export const MoviesWrap = styled.div`
  height: 8180px;

  @media ${mobileL} {
    height: 1620px;
  }
  @media ${tablet} {
    height: 1470px;
  }

  @media ${desktop} {
    height: 1270px;
  }
`;
