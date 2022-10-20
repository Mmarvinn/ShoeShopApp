import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import sortingIcon from '../../images/sorting-icon.svg';

export function Sorting({ onSorting, sortingDisabled }) {
  const [sorting, setSorting] = useState('');

  const handleChange = (event) => {
    setSorting(event.target.value);
    onSorting(event.target.value);
  };

  return (
    <Box
      sx={{ minWidth: 120, position: 'relative' }}
      className={sortingDisabled ? 'sort-disable' : ''}
    >
      <img
        src={sortingIcon}
        alt="sorting icon"
        className="search-panel--sorting-icon"
      />
      <FormControl fullWidth disabled={sortingDisabled}>
        <InputLabel id="demo-simple-select-label" size="small" shrink={false}>
          {!sorting && (
            <span style={{ opacity: 0.6, paddingLeft: '20px' }}>Sorting</span>
          )}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sorting}
          onChange={handleChange}
          size="small"
          sx={{ bgcolor: '#F9FAFB', pr: '0px' }}
        >
          <MenuItem value="popular">Popular</MenuItem>
          <MenuItem value="latest">New</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
