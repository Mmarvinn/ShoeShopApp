import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  position: 'absolute',
  top: '78%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '4px',
  boxShadow: 24,
  p: 4,
};

export const BelowModal = ({ text, pathname, textInLink }) => {
  return (
    <div>
      <Box sx={style}>
        <p>
          {text}
          <Link to={`/home${pathname}`} style={{ color: 'var(--orange-main)' }}>
            {textInLink}
          </Link>
        </p>
      </Box>
    </div>
  );
};
