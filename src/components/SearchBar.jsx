import { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, OutlinedInput, Button } from '@mui/material';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleInput = e => {
    setQuery(e.target.value.toLowerCase());
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
          width: '500px',
          height: '40px',
          flexDirection: 'row',
          gap: '10px',
        }}
      >
        <OutlinedInput
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
