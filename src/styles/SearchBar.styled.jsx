import { OutlinedInput } from '@mui/material';
import styled from 'styled-components';

export const SearchInput = styled(OutlinedInput)`
  &.MuiOutlinedInput-root {
    border-color: #000; /* Default border color */
    border-width: 2px; /* Default border width */
    transition: border-color 0.3s; /* Transition on border color change */
  }

  /* Styles for hover state */
  &&:hover .MuiOutlinedInput-notchedOutline {
    border-color: #02c342; /* Green border color on hover */
  }

  /* Styles for focus state */
  &&.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #02c342; /* Green border color on focus */
    border-width: 1px; /* 1px border width on focus */
  }
`;
