import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { FormHelperText } from '@mui/material';

export function SearchField({ onSearch, value }) {
  const [findValue, setFindValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handlerSubmit = (event) => {
    event.preventDefault();
    onSearch(findValue);
    setSubmittedValue(findValue);
  };

  const handlerChange = (event) => {
    setFindValue(event.target.value);
  };

  useEffect(() => {
    if (submittedValue !== value) {
      setSubmittedValue(value);
      setFindValue(value);
    }
  }, [value, submittedValue]);

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
