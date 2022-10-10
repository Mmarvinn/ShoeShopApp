import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormHelperText } from '@mui/material';
import { userSignIn } from '../user/userSignIn';
import {
  validatePassword,
  validateFullName,
  validateEmail,
  validatePhone,
  validateRegisterInputs,
} from './validationInputs';

export const RegisterForm = () => {
  const [fullNameValidation, setFullNameValidation] = useState(false);

  const [phoneValidation, setPhoneValidation] = useState(false);

  const [emailValidation, setEmailValidation] = useState(false);

  const [passwordValidation, setPasswordValidation] = useState(false);

  const [values, setValues] = useState({
    password: '',
    phone: '',
    email: '',
    fullName: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      phone: values.phone,
      password: values.password,
      fullName: values.fullName,
      email: values.email,
    };

    if (
      !fullNameValidation &&
      !emailValidation &&
      !phoneValidation &&
      !passwordValidation &&
      validateRegisterInputs(values)
    ) {
      console.log(values);
    }
    // console.log(JSON.stringify(data));
    // console.log(userSignIn(data));
  };

  return (
    <form className="w-100" onSubmit={handleSubmit}>
      <h3>Register</h3>
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
            Full Name must contain at least 3 characters.
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
          error={emailValidation}
          fullWidth
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange('email')}
          onKeyUp={() => setEmailValidation(validateEmail(values))}
        />
        {emailValidation && (
          <FormHelperText error={emailValidation} id="my-helper-text">
            Incorrect email.
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
            Enter at least 8 numbers, please.
          </FormHelperText>
        )}
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
        <div style={{ m: 'dense', width: '100%' }}>
          <FormControl
            error={passwordValidation}
            sx={{ mt: '50px', width: '100%' }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              onKeyUp={() => setPasswordValidation(validatePassword(values))}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          {
            <FormHelperText error={passwordValidation} id="my-helper-text">
              Password must contain at least 8 characters, 1 letter, 1 special
              symbol, 1 number
            </FormHelperText>
          }
        </div>
      </Box>
      <input className="register-btn w-100" type="submit" value="Register" />
    </form>
  );
};
