import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import closeIcon from '../../images/close-icon.svg';
import { RegisterForm } from './RegisterForm';
import { BelowModal } from './BelowModal';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '4px',
  boxShadow: 24,
  p: 4,
};

export const RegisterModal = ({ toggleUserLogin }) => {
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
        aria-labelledby="user register"
        aria-describedby="user register form"
      >
        <Box sx={style}>
          <button
            onClick={handleClose}
            className="one-product--close-btn"
            style={{ top: '20px', right: '20px' }}
          >
            <img style={{ width: '18px' }} src={closeIcon} alt="close icon" />
          </button>
          <RegisterForm
            closeModal={handleClose}
            toggleUserLogin={toggleUserLogin}
          />
          {/* <BelowModal /> */}
        </Box>
      </Modal>
    </div>
  );
};
