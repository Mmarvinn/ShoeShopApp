import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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
  border: '2px solid var(--orange-main)',
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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
