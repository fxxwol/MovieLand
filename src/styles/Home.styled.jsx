import { ListItemButton } from '@mui/material';
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

export const MovieItem = styled(ListItemButton)`
 width: calc((100% - 8px));
 max-width: 264px;

  &.css-bn1567-MuiButtonBase-root-MuiListItemButton-root {
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
  display: block;
  object-fit: cover;
  flex-shrink: 0;
`;

