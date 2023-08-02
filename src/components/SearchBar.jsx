import { Button, FormControl } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { SearchInput } from 'styles/SearchBar.styled';
import { breakpoints } from 'styles/Theme';

export default function SearchBar({ onSubmit, onChange }) {
  const [query, setQuery] = useState('');
  const { _, mobileL, tablet, desktop } = breakpoints;

  const handleInput = e => {
    setQuery(e.target.value.toLowerCase());
    onChange([]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        sx={{
          width: '90%',
          display: 'flex',
          margin: '0 auto',
          height: '40px',
          flexDirection: 'row',
          gap: '10px',
          justifyContent: 'center',
          alignItems: 'center',
          [`@media ${tablet}`]: {
            width: '80%',
          },
          [`@media ${desktop}`]: {
            width: '50%',
          },
        }}
      >
        <SearchInput
          placeholder="Please enter movie name"
          type="text"
          name="query"
          value={query}
          autoComplete="off"
          autoFocus
          color="primary"
          onChange={handleInput}
        />
        <Button type="submit" variant="outlined" color="primary" size="medium">
          Search
        </Button>
      </FormControl>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
