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
  top: '41%',
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

  const handleClose = (path) => {
    const indexOfPath = location.pathname.indexOf(path);
    const prevPath = location.pathname.slice(0, indexOfPath);
    navigate(prevPath);
  };

  return (
    <div>
      <Modal
        open={location.pathname.includes('register')}
        onClose={() => handleClose('/register')}
        aria-labelledby="user register"
        aria-describedby="user register form"
      >
        <>
          <Box sx={style}>
            <button
              onClick={() => handleClose('/register')}
              className="one-product--close-btn"
              style={{ top: '20px', right: '20px' }}
            >
              <img style={{ width: '18px' }} src={closeIcon} alt="close icon" />
            </button>
            <RegisterForm
              closeModal={() => handleClose('/register')}
              toggleUserLogin={toggleUserLogin}
            />
          </Box>
          <BelowModal
            pathname="/login"
            text="I already have an account, "
            textInLink="Log In"
          />
        </>
      </Modal>
    </div>
  );
};
