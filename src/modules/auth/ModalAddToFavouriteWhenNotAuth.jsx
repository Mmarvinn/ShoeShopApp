import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useLocation, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ModalAddToFavouriteWhenNotAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div>
      <Modal
        open={location.pathname.includes('add-to-favourite')}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ width: 250, margin: '50px auto' }}>
            <h2 style={{ margin: '30px 0', textAlign: 'center' }}>
              To continue please register or log in
            </h2>

            <Stack spacing={4} direction="column">
              <Link to="/home/login">
                <Button
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
              </Link>
              <Link to="/home/register">
                <Button
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
              </Link>
              <Link to="/home">
                <Button
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
              </Link>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
