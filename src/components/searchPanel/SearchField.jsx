import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

export function SearchField() {
  return (
    <Box
      sx={{
        margin: '0 10px',
      }}
    >
      <FormControl variant="standard">
        <Input
          sx={{
            border: '1px solid rgba(0, 0, 0, 0.23)',
            borderRadius: '5px',
            width: '290px',
            height: '40px',
            bgcolor: '#F9FAFB',
          }}
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
