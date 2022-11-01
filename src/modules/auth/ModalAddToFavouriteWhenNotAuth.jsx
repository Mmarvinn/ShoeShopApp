import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import closeIcon from '../../images/close-icon.svg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  height: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '5px',
};

export const ModalAddToFavouriteWhenNotAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    navigate(-1);
  };

  const redirect = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Modal
        open={location.pathname.includes('add-to-favourite')}
        onClose={handleClose}
        aria-labelledby="modal when user not auth"
      >
        <Box sx={style}>
          <button
            onClick={handleClose}
            className="one-product--close-btn"
            style={{ top: '20px', right: '20px' }}
          >
            <img style={{ width: '22px' }} src={closeIcon} alt="close icon" />
          </button>
          <Box sx={{ width: 250, margin: '50px auto' }}>
            <h2 style={{ margin: '30px 0', textAlign: 'center' }}>
              To continue please register or log in
            </h2>

            <Stack spacing={4} direction="column">
              <Button
                onClick={() => redirect('/home/login')}
                fullWidth
                sx={{
                  backgroundColor: 'var(--orange-main)',
                  '&:hover': {
                    backgroundColor: '#c35309',
                  },
                }}
                variant="contained"
              >
                Continue to log in
              </Button>
              <Button
                onClick={() => redirect('/home/register')}
                fullWidth
                sx={{
                  backgroundColor: 'var(--orange-main)',
                  '&:hover': {
                    backgroundColor: '#c35309',
                  },
                }}
                variant="contained"
              >
                Continue to register
              </Button>
              <Button
                onClick={() => redirect(-1)}
                fullWidth
                sx={{
                  color: 'var(--orange-main)',
                  borderColor: 'var(--orange-main)',
                  '&:hover': {
                    color: '#c35309',
                    borderColor: '#c35309',
                  },
                }}
                variant="outlined"
              >
                Continue as quest
              </Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
