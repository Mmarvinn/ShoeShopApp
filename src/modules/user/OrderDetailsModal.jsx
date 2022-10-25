import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrderDetails } from './OrderDetails';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 804,
  height: 744,
  bgcolor: 'background.paper',
  border: '2px solid var(--orange-main)',
  boxShadow: 24,
  p: 4,
};

export const OrderDetailsModal = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div>
      <Modal
        open={location.pathname.includes('order-details')}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <OrderDetails closeModal={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};
