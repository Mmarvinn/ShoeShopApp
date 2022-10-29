import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const AlertAddedToFavourite = ({ handleCloseAlert, alertProps }) => {
  // const timer = () => {
  //   setTimeout(() => {
  //     handleCloseAlert(true);
  //     timer();
  //   }, 3000);
  // };

  // if (alertProps.isOpen) {
  //   clearTimeout(timer);
  //   timer();
  // }

  return (
    <div className="favourite-alert">
      <Stack sx={{ width: '100%' }}>
        <Alert
          onClose={() => handleCloseAlert(true)}
          variant="filled"
          severity={alertProps.alertType}
        >
          {alertProps.alertType === 'success' ? (
            <span>
              The {alertProps.productTitle} successfully added to favourite
            </span>
          ) : (
            <span>The {alertProps.productTitle} deleted from favourites</span>
          )}
        </Alert>
      </Stack>
    </div>
  );
};
