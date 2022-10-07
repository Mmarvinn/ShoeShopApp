import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

export function AddToFavoriteButton() {
  const [toggleLike, setToggleLike] = useState(false);
  const handleClick = () => {
    setToggleLike(!toggleLike);
  };

  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: 'white',
        width: '32px',
        height: '32px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: '50%',
        boxShadow: 3,
      }}
    >
      <IconButton onClick={handleClick} color="inherit">
        {toggleLike ? (
          <FavoriteIcon
            style={{
              color: 'red',
              width: '24px',
              height: '24px',
            }}
          />
        ) : (
          <FavoriteBorderIcon
            style={{
              color: 'grey',
              width: '24px',
              height: '24px',
            }}
          />
        )}
      </IconButton>
    </Stack>
  );
}
