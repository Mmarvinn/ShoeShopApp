import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    padding: '0 4px',
    backgroundColor: 'var(--orange-main)',
    height: '15px',
    minWidth: '15px',
  },
}));

export function CustomizedBadges() {
  return (
    <IconButton
      aria-label="cart"
      color="inherit"
      size="small"
      sx={{ margin: '0 5px' }}
    >
      <StyledBadge badgeContent={2} color="secondary">
        <ShoppingCartIcon sx={{ width: '20px', height: '20px' }} />
      </StyledBadge>
    </IconButton>
  );
}
