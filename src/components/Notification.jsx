import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Slide } from '@mui/material';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={24} ref={ref} variant="filled" {...props} />;
});

export const Notification = ({
  closeNotification,
  isOpen,
  notificationType,
  notificationTitle,
  isTitleOfProducts,
  durationMs,
}) => {
  const titleAddToFavorites = (
    <div style={{ display: 'flex' }}>
      The
      <span className="three-dots">{notificationTitle}</span>
      successfully added to favorite
    </div>
  );
  const titleDeleteFromFavorites = (
    <div style={{ display: 'flex' }}>
      The <span className="three-dots">{notificationTitle}</span>
      deleted from favorites
    </div>
  );

  const handleClose = () => {
    closeNotification(true);
  };

  return (
    <div className="favourite-alert">
      <Stack sx={{ width: '100%' }}>
        <Snackbar
          style={{
            top: '100px',
            right: '400px',
          }}
          open={isOpen}
          autoHideDuration={durationMs ? durationMs : 3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          TransitionComponent={Slide}
        >
          <Alert
            onClose={handleClose}
            severity={notificationType}
            sx={{ width: '100%' }}
          >
            {isTitleOfProducts
              ? (notificationType === 'success' && titleAddToFavorites) ||
                (notificationType === 'info' && titleDeleteFromFavorites)
              : notificationTitle}
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
};
