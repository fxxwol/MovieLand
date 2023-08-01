import { Skeleton } from '@mui/material';
import styled from 'styled-components';
import { breakpoints } from './Theme';

const { _, mobileL, tablet, desktop } = breakpoints;
export const SliderImage = styled.img`
  width: 100%;
  border-radius: 8px;
  ${({ isLoading }) =>
    isLoading &&
    `position: 'absolute',
            width: '0px',
            height: '0px',
            margin: ' -1px',
            border: 0,
            padding: 0,
            overflow: 'hidden'`}
`;

export const SwiperWrap = styled.div`
  width: 100%;
`;

export const SliderSkeleton = styled(Skeleton)`
  &.MuiSkeleton-root {
    width: 100%;
    height: 140px;
    border-radius: 8px;
    background-color: rgb(243 238 238 / 77%);
    @media ${mobileL} {
      height: 196px;
    }
    @media ${tablet} {
      height: 146px;
    }

    @media ${desktop} {
      height: 171px;
    }
  }
`;
