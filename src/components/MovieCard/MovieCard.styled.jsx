import styled from 'styled-components';
import { breakpoints } from '../../styles/Theme';
import { ListItemButton, Skeleton } from '@mui/material';

const { _, mobileL, tablet, desktop } = breakpoints;
export const MovieItem = styled(ListItemButton)`
  width: calc((100% - 8px));
  max-width: 264px;

  &.MuiListItemButton-root {
    flex-grow: unset;
    -webkit-flex-grow: unset;
    transition: all 250ms ease-in-out 0ms;
  }

  &:hover,
  :focus {
    transform: scale(1.02);
  }

  @media ${mobileL} {
    width: calc((100% - 16px) / 3);
    max-width: 156px;
  }
  @media ${tablet} {
    width: calc((100% - 24px) / 4);
    max-width: 200px;
  }
`;

export const ImageItem = styled.img`
  width: 100%;
  height: 400px;
  display: block;
  object-fit: cover;
  flex-shrink: 0;

  @media ${mobileL} {
    height: 220px;
  }

  @media ${tablet} {
    height: 280px;
  }
  @media ${desktop} {
    height: 300px;
  }
`;

export const SkeletonLoader = styled(Skeleton)`
  &.MuiSkeleton-root {
    width: 100%;
    height: 400px;

    @media ${mobileL} {
      height: 220px;
    }

    @media ${tablet} {
      height: 280px;
    }
    @media ${desktop} {
      height: 300px;
    }
  }
`;
