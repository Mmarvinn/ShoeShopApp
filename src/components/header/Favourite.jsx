import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

export function FavoriteBasket() {
  return (
    <Stack direction="row" sx={{ margin: '0 5px' }}>
      <Link to="/home/add-to-favourite" style={{ color: 'white' }}>
        <IconButton aria-label="fingerprint" color="inherit">
          <FavoriteIcon
            color="inherit"
            sx={{ width: '20px', height: '20px' }}
          />
        </IconButton>
      </Link>
    </Stack>
  );
}
