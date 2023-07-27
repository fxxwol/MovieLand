import { Button } from '@mui/material';
import styled from 'styled-components';
import { breakpoints } from './Theme';

export const BtnList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  height: fit-content;
`;

export const AdditionalWrap = styled.div`
  @media ${breakpoints.tablet} {
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 48%;
  }
  @media ${breakpoints.desktop}{
    position: static;
    width: unset;
  }
`;


export const Info = styled(Button)`
  text-decoration: none;
  color: black;
  font-size: 18px;
  line-height: 1.75px;
  border: 1px solid black;

  &.MuiButton-root:hover {
    color: #02c342;
    border: 1px solid #02c342;
  }

  &.active {
    color: #02c342;
    border: 1px solid #02c342;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 20px 0;
`;
