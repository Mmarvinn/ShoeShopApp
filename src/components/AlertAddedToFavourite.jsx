import { useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const AlertAddedToFavourite = ({ handleCloseAlert, alertProps }) => {
  useEffect(() => {
    if (alertProps.isOpen) {
      const timer = setTimeout(() => {
        handleCloseAlert(true);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [alertProps.isOpen, alertProps.productTitle, alertProps.alertType]);

  return (
    <div className="favourite-alert">
      <Stack sx={{ width: '100%' }}>
        <Alert
          onClose={() => handleCloseAlert(true)}
          variant="filled"
          severity={alertProps.alertType}
        >
          {alertProps.alertType === 'success' ? (
            <div style={{ display: 'flex' }}>
              The <span className="three-dots">{alertProps.productTitle}</span>
              successfully added to favorite
            </div>
          ) : (
            <div style={{ display: 'flex' }}>
              The <span className="three-dots">{alertProps.productTitle}</span>{' '}
              deleted from favorites
            </div>
          )}
        </Alert>
      </Stack>
    </div>
  );
};
