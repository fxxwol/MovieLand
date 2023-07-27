import styled from 'styled-components';
import { Container } from '@mui/material';
import { breakpoints } from './Theme';

const { _, mobileL, tablet, desktop } = breakpoints;

export const Section = styled.section`
  padding: 30px 0;
`;

export const ContainerWrap = styled(Container)`
  &.MuiContainer-root {
    width: 100%;

    @media ${mobileL} {
      width: 432px;
    }
    @media ${tablet} {
      width: 672px;
    }
    @media ${desktop} {
      width: 1152px;
    }
  }
`;
