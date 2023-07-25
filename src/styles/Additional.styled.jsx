import { Button } from '@mui/material';
import styled from 'styled-components';

export const BtnList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 20px 0;
  gap: 10px;
`;

export const Info = styled(Button)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  line-height: 1.75px;
  border: 1px solid black;
  &.css-1yq06zn-MuiButtonBase-root-MuiButton-root:hover
  {
    color: #02c342;
    border: 1px solid #02c342;
  }

  &.active {
    color: #02c342;
    border: 1px solid #02c342;
  }
`;
