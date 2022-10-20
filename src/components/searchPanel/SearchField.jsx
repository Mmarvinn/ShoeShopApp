import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export function SearchField({ onSearch }) {
  const [findValue, setFindValue] = useState('');

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (findValue.length >= 3) {
      onSearch(findValue);
    }
    setFindValue('');
  };

  const handlerChange = (event) => {
    setFindValue(event.target.value);
  };

  return (
    <form onSubmit={handlerSubmit}>
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
              '&:hover': {
                borderColor: 'black',
              },
            }}
            value={findValue}
            onChange={handlerChange}
            placeholder="Search products by name"
            disableUnderline={true}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
    </form>
  );
}
