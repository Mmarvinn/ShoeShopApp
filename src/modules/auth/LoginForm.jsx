import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { FormHelperText } from '@mui/material';
import {
  validatePassword,
  validateEmail,
  validateLoginInputs,
} from './validationInputs';
import { userLogIn } from '../user/userLogIn';
import { isLoggedIn } from '../user/isLoggedIn';
import { setJwtToken } from '../../services/localStorage';

export const LoginForm = ({ closeModal, onUserAuth }) => {
  const [emailValidation, setEmailValidation] = useState(false);

  const [passwordValidation, setPasswordValidation] = useState(false);

  const [loginError, setLoginError] = useState(false);

  const [values, setValues] = useState({
    password: '',
    email: '',
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

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      password: values.password,
      email: values.email,
    };

    if (
      !emailValidation &&
      !passwordValidation &&
      validateLoginInputs(values)
    ) {
      const fetchedData = await userLogIn(data);

      if (fetchedData?.error) {
        console.log(fetchedData);

        setLoginError(true);
      } else {
        console.log(fetchedData);

        setJwtToken(fetchedData.token);
        setLoginError(false);
        onUserAuth(fetchedData.token);
        closeModal();
      }
    }
  };

  return (
    <form className="w-100" onSubmit={handleSubmit}>
      <h3>Login</h3>
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
        {loginError ? (
          <FormHelperText error={true} id="my-helper-text">
            Incorrect email or password
          </FormHelperText>
        ) : (
          emailValidation && (
            <FormHelperText error={emailValidation} id="my-helper-text">
              Incorrect email.
            </FormHelperText>
          )
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
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          {loginError ? (
            <FormHelperText error={true} id="my-helper-text">
              Incorrect email or password
            </FormHelperText>
          ) : (
            <FormHelperText error={passwordValidation} id="my-helper-text">
              Password must contain at least 8 characters, 1 letter, 1 special
              symbol, 1 number
            </FormHelperText>
          )}
        </div>
      </Box>
      <input className="login-btn w-100" type="submit" value="Login" />
    </form>
  );
};
