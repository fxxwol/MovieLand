import { OutlinedInput } from '@mui/material';
import styled from 'styled-components';

export const SearchInput = styled(OutlinedInput)`
  width: 90%;
  height: 100%;
  &.MuiOutlinedInput-root {
    border-color: #000;
    border-width: 2px;
    transition: border-color 0.3s;
  }

  &&:hover .MuiOutlinedInput-notchedOutline {
    border-color: #02c342;
  }

  &&.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #02c342;
    border-width: 1px;
  }
`;
