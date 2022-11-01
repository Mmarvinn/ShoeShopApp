import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import closeIcon from '../../images/close-icon.svg';
import { LoginForm } from './LoginForm';
import { BelowModal } from './BelowModal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '4px',
  boxShadow: 24,
  p: 4,
};

export const LogInModal = () => {
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
        open={location.pathname.includes('login')}
        onClose={() => handleClose('/login')}
        aria-labelledby="login"
        aria-describedby="user login form"
      >
        <>
          <Box sx={style}>
            <button
              onClick={() => handleClose('/login')}
              className="one-product--close-btn"
              style={{ top: '20px', right: '20px' }}
            >
              <img style={{ width: '18px' }} src={closeIcon} alt="close icon" />
            </button>
            <LoginForm closeModal={() => handleClose('/login')} />
          </Box>
          <BelowModal
            pathname="/register"
            text="I have no account, "
            textInLink="Register now"
          />
        </>
      </Modal>
    </div>
  );
};
