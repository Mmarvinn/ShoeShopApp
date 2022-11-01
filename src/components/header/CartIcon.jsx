import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(() => ({
  '& .MuiBadge-badge': {
    right: -3,
    padding: '0 4px',
    backgroundColor: 'var(--orange-main)',
    height: '15px',
    minWidth: '15px',
  },
}));

export function CartIcon() {
  const quantityOfProducts = useSelector((state) =>
    Object.values(state.cart).reduce((sum, el) => sum + el.quantity, 0)
  );

  return (
    <Link to="/cart">
      <IconButton
        aria-label="cart icon"
        color="inherit"
        size="small"
        sx={{ margin: '0 5px' }}
      >
        <StyledBadge badgeContent={quantityOfProducts} color="secondary">
          <ShoppingCartIcon sx={{ width: '20px', height: '20px' }} />
        </StyledBadge>
      </IconButton>
    </Link>
  );
}
