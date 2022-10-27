import { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FormHelperText } from '@mui/material';
import { validatePassword } from '../../services/validationInputs';
import { updateUserPassword } from './redux/userSlice';

export const UserEditPassword = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmPassword: false,
  });

  const [passwordValidation, setPasswordValidation] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const [updateUserPasswordError, setUpdateUserPasswordError] = useState({
    error: false,
    errorStatus: null,
  });

  const styleForPassBoxes = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '376px',
  };

  const styleForPassWrappers = { m: 'dense', width: '100%' };
  const styleForPassFormControl = { mt: '15px', width: '100%' };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

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

  const handleSubmitUserPassword = async (event) => {
    event.preventDefault();

    const data = {
      oldPassword: values.currentPassword,
      password: values.newPassword,
    };
    if (
      !passwordValidation.currentPassword &&
      !passwordValidation.newPassword &&
      !passwordValidation.confirmPassword
    ) {
      dispatch(updateUserPassword(data))
        .unwrap()
        .then(() => {
          setUpdateUserPasswordError((prevState) => ({
            ...prevState,
            error: false,
            errorStatus: null,
          }));

          setValues((prevState) => ({
            ...prevState,
            currentPassword: '',
            confirmPassword: '',
            newPassword: '',
            showConfirmPassword: false,
            showCurrentPassword: false,
            showNewPassword: false,
          }));
        })
        .catch((err) => {
          console.log(err);
          setUpdateUserPasswordError((prevState) => ({
            ...prevState,
            error: true,
            errorStatus: err.status,
          }));
        });
    }
  };

  return (
    <div className="user-settings--change-password">
      <form
        className="user-settings--change-password-form w-100"
        onSubmit={handleSubmitUserPassword}
      >
        <h3 style={{ marginRight: 'auto' }}>Change password</h3>
        <Box sx={styleForPassBoxes}>
          <div style={styleForPassWrappers}>
            <FormControl
              size="small"
              error={
                passwordValidation.currentPassword ||
                updateUserPasswordError.error
              }
              sx={styleForPassFormControl}
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
                      currentPassword: validatePassword(values.currentPassword),
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
                label="Current Password"
              />
            </FormControl>
            {updateUserPasswordError.errorStatus === 401 && (
              <FormHelperText error={true} id="my-helper-text">
                Wrong current password.
              </FormHelperText>
            )}
          </div>
        </Box>
        <Box sx={styleForPassBoxes}>
          <div style={styleForPassWrappers}>
            <FormControl
              size="small"
              error={
                passwordValidation.newPassword ||
                !(values.confirmPassword === values.newPassword)
              }
              sx={styleForPassFormControl}
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
                label="New Password"
              />
            </FormControl>
            {!(values.confirmPassword === values.newPassword) && (
              <FormHelperText error={true} id="my-helper-text">
                The passwords don't match
              </FormHelperText>
            )}
          </div>
        </Box>
        <Box sx={styleForPassBoxes}>
          <div style={styleForPassWrappers}>
            <FormControl
              size="small"
              error={
                passwordValidation.confirmPassword ||
                !(values.confirmPassword === values.newPassword)
              }
              sx={styleForPassFormControl}
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
                      confirmPassword: validatePassword(values.confirmPassword),
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
                label="Confirm Password"
              />
            </FormControl>
            {
              <FormHelperText
                error={
                  passwordValidation.confirmPassword ||
                  passwordValidation.currentPassword ||
                  passwordValidation.newPassword
                }
                id="my-helper-text"
              >
                Password must contain at least 8 characters, 1 letter, 1 special
                symbol, 1 number
              </FormHelperText>
            }
          </div>
        </Box>
        <Box>
          <Button
            fullWidth
            disabled={
              !(values.confirmPassword === values.newPassword) ||
              validatePassword(values.confirmPassword) ||
              validatePassword(values.newPassword) ||
              validatePassword(values.currentPassword)
            }
            type="submit"
            sx={{
              m: '10px 0 30px 0',
              textTransform: 'none',
              backgroundColor: 'var(--orange-main)',
              width: 376,
              height: 36,
              fontSize: '12px',
              '&:hover': {
                backgroundColor: '#c35309',
              },
            }}
            variant="contained"
          >
            Change password
          </Button>
        </Box>
      </form>
    </div>
  );
};
