import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export function FavoriteBasket() {
  const handleClick = () => {
    window.location.pathname = '/add-to-favourite';
  };

  return (
    <Stack direction="row" spacing={1}>
      <IconButton
        onClick={handleClick}
        aria-label="fingerprint"
        color="inherit"
      >
        <FavoriteIcon color="inherit" />
      </IconButton>
    </Stack>
  );
}
