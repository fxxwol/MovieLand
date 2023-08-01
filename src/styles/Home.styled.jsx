import styled from 'styled-components';
import { breakpoints } from './Theme';

const { _, mobileL, tablet, desktop } = breakpoints;

export const H1 = styled.h1`
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;

  @media ${tablet} {
    font-size: 40px;
    margin-bottom: 40px;
  }

  @media ${desktop} {
    font-size: 50px;
  }
`;
