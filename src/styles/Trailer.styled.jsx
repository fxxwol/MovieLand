import styled from 'styled-components';
import { breakpoints } from './Theme';

const { _, mobileL, tablet } = breakpoints;

export const Player = styled.iframe`
  width: 100%;
  height: calc(100vw / 1.8);
  max-width: 1200px;
  max-height: 667px;
  display: block;

  @media ${mobileL} {
  }

  @media ${tablet} {
    display: block;
    margin: 30px auto;
  }
`;

export const VideoImg = styled.img`
  width: 100%;
  display: block;
  margin: 30px auto;
`;
