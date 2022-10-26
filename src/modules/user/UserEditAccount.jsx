import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { FormHelperText } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import {
  validatePassword,
  validateFullName,
  validateEmail,
  validatePhone,
  validateUserMainInfoInputs,
} from '../../services/validationInputs';
import { useMakeRequest } from '../../hooks/useMakeRequest';
import { getCountriesApi } from './getCountries';
import { updateUserAccount, updateUserPassword } from '../user/redux/userSlice';

export const UserEditAccount = () => {
  const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const { request, error, loading } = useMakeRequest();
  const [countries, setCountries] = useState([]);
  const [fullNameValidation, setFullNameValidation] = useState(false);
  const [phoneValidation, setPhoneValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const [updateUserInfoError, setUpdateUserInfoError] = useState({
    error: false,
    errorStatus: null,
  });

  const [updateUserPasswordError, setUpdateUserPasswordError] = useState({
    error: false,
    errorStatus: null,
  });

  const [values, setValues] = useState({
    phone: userData.phone,
    email: userData.email,
    fullName: userData.fullName,
    country: userData.country,
    city: userData.city,
    address: userData.address,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmPassword: false,
  });

  const styleForInputs = {
    mt: '25px',
    width: '376px',
    height: '36px',
  };

  const styleForPassBoxes = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '376px',
  };

  const styleForPassWrappers = { m: 'dense', width: '100%' };
  const styleForPassFormControl = { mt: '15px', width: '100%' };

  const countryChange = (event, newValue) => {
    setValues((prevState) => {
      return { ...prevState, country: newValue };
    });
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

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmitUserInfo = async (event) => {
    event.preventDefault();

    const data = {
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      country: values.country,
      city: values.city,
      address: values.address,
    };

    if (
      !fullNameValidation &&
      !emailValidation &&
      !phoneValidation &&
      validateUserMainInfoInputs(values)
    ) {
      dispatch(updateUserAccount(data))
        .unwrap()
        .then(() => {
          console.log('Info updated succesfully');
          setUpdateUserInfoError((prevState) => ({
            ...prevState,
            error: false,
            errorStatus: null,
          }));
        })
        .catch((err) => {
          console.log(err);
          setUpdateUserInfoError((prevState) => ({
            ...prevState,
            error: true,
            errorStatus: err.statusCode,
          }));
        });
    }
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

  useEffect(() => {
    const getCountries = async () => {
      const countries = await request(getCountriesApi);

      setCountries(countries);
    };

    getCountries();
  }, []);

  return (
    <>
      <div className="user-settings--main-info">
        <form
          className="user-settings--main-info-form w-100"
          onSubmit={handleSubmitUserInfo}
        >
          <h3 style={{ marginRight: 'auto', marginTop: '50px' }}>
            Main Information
          </h3>
          <Box sx={styleForInputs}>
            <TextField
              error={fullNameValidation}
              size="small"
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
          <Box sx={styleForInputs}>
            <TextField
              error={updateUserInfoError.errorStatus ? true : emailValidation}
              size="small"
              fullWidth
              label="Email"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              onKeyUp={() => setEmailValidation(validateEmail(values))}
            />
            {updateUserInfoError.errorStatus === 409 ||
            updateUserInfoError.errorStatus === 500 ? (
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
          <Box sx={styleForInputs}>
            <TextField
              error={phoneValidation}
              size="small"
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
          <Box sx={styleForInputs}>
            <Autocomplete
              clearOnBlur
              clearOnEscape
              value={values.country || null}
              options={countries}
              onChange={countryChange}
              renderInput={(props) => {
                return <TextField {...props} label="Country" size="small" />;
              }}
            />
          </Box>
          <Box sx={styleForInputs}>
            <TextField
              fullWidth
              size="small"
              label="City"
              type="text"
              value={values.city}
              onChange={handleChange('city')}
            />
          </Box>
          <Box sx={styleForInputs}>
            <TextField
              fullWidth
              size="small"
              label="Address"
              type="text"
              value={values.address}
              onChange={handleChange('address')}
            />
          </Box>
          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                mt: '40px',
                textTransform: 'none',
                backgroundColor: 'var(--orange-main)',
                width: 376,
                height: 36,
                fontSize: '12px',
              }}
              variant="contained"
            >
              Save
            </Button>
          </Box>
        </form>
      </div>

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
                  Password must contain at least 8 characters, 1 letter, 1
                  special symbol, 1 number
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
              }}
              variant="contained"
            >
              Change password
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};
