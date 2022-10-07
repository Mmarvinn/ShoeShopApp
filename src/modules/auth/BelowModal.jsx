import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useLocation, useNavigate } from 'react-router-dom';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  position: 'absolute',
  top: '80%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const BelowModal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div>
      <Modal
        open={location.pathname.includes('register')}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2>HELLO BELOW</h2>
        </Box>
      </Modal>
    </div>
  );
};
