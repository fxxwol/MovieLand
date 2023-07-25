import { ListItemButton } from '@mui/material';
import styled from 'styled-components';

export const H1 = styled.h1`
  font-weight: 400;
  font-size: 60px;
  margin-bottom: 30px;
`;

export const MovieItem = styled(ListItemButton)`
  width: calc((100% - 15px) / 4);
`;

