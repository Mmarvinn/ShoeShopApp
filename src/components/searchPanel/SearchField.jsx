import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

export function SearchField() {
  return (
    <Box>
      <FormControl variant="standard">
        <Input
          sx={{ border: '1px solid grey', borderRadius: '4px' }}
          placeholder="Search products by name"
          disableUnderline={true}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}
