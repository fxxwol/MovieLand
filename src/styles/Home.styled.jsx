import { ListItemButton } from '@mui/material';
import styled from 'styled-components';

export const H1 = styled.h1`
  font-weight: 400;
  font-size: 60px;
  margin-bottom: 30px;
`;

export const MovieItem = styled(ListItemButton)`
  width: calc((100% - 15px) / 4);
  &.css-bn1567-MuiButtonBase-root-MuiListItemButton-root {
    flex-grow: unset;
    -webkit-flex-grow: unset;
  }
`;

export const ImageItem = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
  flex-shrink: 0;
`;
