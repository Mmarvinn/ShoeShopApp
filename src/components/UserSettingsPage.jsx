import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormHelperText } from '@mui/material';
import {
  validatePassword,
  validateFullName,
  validateEmail,
  validatePhone,
  validateUserMainInfoInputs,
} from '../services/validationInputs';

export const UserSettingsPage = () => {
  const [fullNameValidation, setFullNameValidation] = useState(false);
  const [phoneValidation, setPhoneValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
  const [signInError, setSignInError] = useState({
    error: false,
    errorStatus: null,
    errorMessage: '',
  });
  const [values, setValues] = useState({
    phone: '',
    email: '',
    fullName: '',
    country: '',
    city: '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmPassword: false,
  });

  const handleClickShowCurrentPassword = () => {
    setValues({
      ...values,
      showCurrentPassword: !values.showCurrentPassword,
    });
  };

  const handleClickShowNewPassword = () => {
    setValues({
      ...values,
      showNewPassword: !values.showNewPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmitUserInfo = () => {};

  const handleSubmitUserPassword = () => {};

  return (
    <div className="user-settings">
      <div className="user-settings--head">
        <div>
          <img alt="user logo" />
        </div>
        <span>Tony Stark</span>
      </div>
      <div className="user-settings--nav">
        <button>Edit account</button>
        <button>Orders History</button>
        <button>Favourites</button>
      </div>
      <div className="user-settings--main-info">
        <form className="w-100" onSubmit={handleSubmitUserInfo}>
          <h3>Main Information</h3>
          <Box
            sx={{
              mt: '50px',
              width: '100%',
              height: '36px',
            }}
          >
            <TextField
              error={fullNameValidation}
              fullWidth
              label="Full Name"
              type="text"
              value={values.fullName}
              onChange={handleChange('fullName')}
              onKeyUp={() => setFullNameValidation(validateFullName(values))}
            />
            {fullNameValidation && (
              <FormHelperText error={fullNameValidation} id="my-helper-text">
                Full Name must contain only letters Aa-Zz and one space.
              </FormHelperText>
            )}
          </Box>
          <Box
            sx={{
              mt: '50px',
              width: '100%',
              height: '36px',
            }}
          >
            <TextField
              error={signInError.errorStatus ? true : emailValidation}
              fullWidth
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              onKeyUp={() => setEmailValidation(validateEmail(values))}
            />
            {signInError.errorStatus === 409 ? (
              <FormHelperText error={true} id="my-helper-text">
                This email already used
              </FormHelperText>
            ) : (
              emailValidation && (
                <FormHelperText error={emailValidation} id="my-helper-text">
                  Incorrect email.
                </FormHelperText>
              )
            )}
          </Box>
          <Box
            sx={{
              mt: '50px',
              width: '100%',
              height: '36px',
            }}
          >
            <TextField
              error={phoneValidation}
              fullWidth
              label="Phone number"
              type="number"
              value={values.phone}
              onChange={handleChange('phone')}
              onKeyUp={() => setPhoneValidation(validatePhone(values))}
            />
            {phoneValidation && (
              <FormHelperText error={phoneValidation} id="my-helper-text">
                Enter "+" and at least 10 numbers not more 14, please.
              </FormHelperText>
            )}
          </Box>
          <Box
            sx={{
              mt: '50px',
              width: '100%',
              height: '36px',
            }}
          >
            <TextField
              fullWidth
              label="Country"
              type="text"
              value={values.country}
              onChange={handleChange('country')}
            />
          </Box>
          <Box
            sx={{
              mt: '50px',
              width: '100%',
              height: '36px',
            }}
          >
            <TextField
              fullWidth
              label="City"
              type="text"
              value={values.city}
              onChange={handleChange('city')}
            />
          </Box>
          <Box
            sx={{
              mt: '50px',
              width: '100%',
              height: '36px',
            }}
          >
            <TextField
              fullWidth
              label="Address"
              type="text"
              value={values.address}
              onChange={handleChange('address')}
            />
          </Box>
          <input className="register-btn w-100" type="submit" value="Save" />
        </form>
      </div>

      <div className="user-settings--change-password">
        <form className="w-100" onSubmit={handleSubmitUserPassword}>
          <h3>Change password</h3>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
            <div style={{ m: 'dense', width: '100%' }}>
              <FormControl
                error={passwordValidation.currentPassword}
                sx={{ mt: '50px', width: '100%' }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Current Password
                </InputLabel>
                <OutlinedInput
                  // id="outlined-adornment-password"
                  type={values.showCurrentPassword ? 'text' : 'password'}
                  value={values.currentPassword}
                  onChange={handleChange('currentPassword')}
                  onKeyUp={() =>
                    setPasswordValidation((prevState) => {
                      return {
                        ...prevState,
                        currentPassword: validatePassword(
                          values.currentPassword
                        ),
                      };
                    })
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowCurrentPassword}
                        edge="end"
                      >
                        {values.showCurrentPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {
                <FormHelperText
                  error={passwordValidation.currentPassword}
                  id="my-helper-text"
                >
                  Password must contain at least 8 characters, 1 letter, 1
                  special symbol, 1 number
                </FormHelperText>
              }
            </div>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
            <div style={{ m: 'dense', width: '100%' }}>
              <FormControl
                error={passwordValidation.newPassword}
                sx={{ mt: '50px', width: '100%' }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  New Password
                </InputLabel>
                <OutlinedInput
                  // id="outlined-adornment-password"
                  type={values.showNewPassword ? 'text' : 'password'}
                  value={values.newPassword}
                  onChange={handleChange('newPassword')}
                  onKeyUp={() =>
                    setPasswordValidation((prevState) => {
                      return {
                        ...prevState,
                        newPassword: validatePassword(values.newPassword),
                      };
                    })
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowNewPassword}
                        edge="end"
                      >
                        {values.showNewPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {
                <FormHelperText
                  error={passwordValidation.newPassword}
                  id="my-helper-text"
                >
                  Password must contain at least 8 characters, 1 letter, 1
                  special symbol, 1 number
                </FormHelperText>
              }
            </div>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
            <div style={{ m: 'dense', width: '100%' }}>
              <FormControl
                error={passwordValidation.confirmPassword}
                sx={{ mt: '50px', width: '100%' }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  // id="outlined-adornment-password"
                  type={values.showConfirmPassword ? 'text' : 'password'}
                  value={values.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  onKeyUp={() =>
                    setPasswordValidation((prevState) => {
                      return {
                        ...prevState,
                        confirmPassword: validatePassword(
                          values.confirmPassword
                        ),
                      };
                    })
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        edge="end"
                      >
                        {values.showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {
                <FormHelperText
                  error={passwordValidation.confirmPassword}
                  id="my-helper-text"
                >
                  Password must contain at least 8 characters, 1 letter, 1
                  special symbol, 1 number
                </FormHelperText>
              }
            </div>
          </Box>
          <input
            className="register-btn w-100"
            type="submit"
            value="Change password"
          />
        </form>
      </div>
    </div>
  );
};
