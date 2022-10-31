import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import closeIcon from '../../images/close-icon.svg';

const boxWrapperStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  height: 405,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '7px',
};

const boxStyle = {
  width: 330,
  margin: '0px auto',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
};

const containedBtnStyle = {
  textTransform: 'none',
  width: 220,
  height: 36,
  backgroundColor: 'var(--orange-main)',
  '&:hover': {
    backgroundColor: '#c35309',
  },
};

const outlinedBtnStyle = {
  textTransform: 'none',
  width: 220,
  height: 36,
  color: 'var(--orange-main)',
  borderColor: 'var(--orange-main)',
  '&:hover': {
    color: '#c35309',
    borderColor: '#c35309',
  },
};

export const CartModal = ({ openModal, toggleOpenModal, onClose }) => {
  const navigate = useNavigate();

  const shoppingBtnClick = () => {
    navigate('/home');
  };

  const orderHistoryBtnClick = () => {
    navigate('/settings/orders');
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={toggleOpenModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxWrapperStyle}>
          <button
            style={{ top: '22px', right: '22px' }}
            onClick={onClose}
            className="one-product--close-btn"
          >
            <img
              style={{ width: '18px', height: '18px' }}
              src={closeIcon}
              alt="close icon"
            />
          </button>
          <Box sx={boxStyle}>
            <h2 style={{ margin: '30px 0', textAlign: 'center' }}>
              Thank you for your purchase
            </h2>
            <p style={{ textAlign: 'center', fontSize: '15px' }}>
              We will send you a notification when your order arrives to you
            </p>
            <Stack spacing={2} direction="column" style={{ marginTop: '40px' }}>
              <Button
                onClick={shoppingBtnClick}
                fullWidth
                sx={containedBtnStyle}
                variant="contained"
              >
                Continue shopping
              </Button>
              <Button
                onClick={orderHistoryBtnClick}
                fullWidth
                sx={outlinedBtnStyle}
                variant="outlined"
              >
                View order history
              </Button>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
