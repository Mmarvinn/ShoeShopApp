import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

export function FavoriteBasket() {
  const user = useSelector((state) => state.user.data);
  const location = useLocation();

  return (
    <Stack direction="row" sx={{ margin: '0 5px' }}>
      <Link
        to={
          user
            ? '/settings/favourites'
            : `${location.pathname}/add-to-favourite`
        }
        style={{ color: 'white' }}
      >
        <IconButton aria-label="favorite" color="inherit">
          <FavoriteIcon
            color="inherit"
            sx={{ width: '20px', height: '20px' }}
          />
        </IconButton>
      </Link>
    </Stack>
  );
}
