import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { OrderDetails } from './OrderDetails';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 804,
  height: 744,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '4px',
};

export const OrderDetailsModal = ({ onClose, open, order }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <OrderDetails closeModal={onClose} order={order} />
        </Box>
      </Modal>
    </div>
  );
};
