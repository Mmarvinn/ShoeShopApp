import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { FormHelperText } from '@mui/material';
import {
  validatePassword,
  validateEmail,
  validateLoginInputs,
} from '../../services/validationInputs';
import { useDispatch } from 'react-redux';
import { logInUser } from '../user/redux/userSlice';

export const LoginForm = ({ closeModal }) => {
  const dispatch = useDispatch();
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
      dispatch(logInUser(data))
        .unwrap()
        .then(() => {
          closeModal();
          setLoginError(false);
        })
        .catch((err) => {
          setLoginError(true);
        });
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
              onKeyUp={() =>
                setPasswordValidation(validatePassword(values.password))
              }
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
      <Box>
        <Button
          fullWidth
          type="submit"
          sx={{
            mt: '40px',
            textTransform: 'none',
            backgroundColor: 'var(--orange-main)',
            width: '100%',
            height: 36,
            fontSize: '12px',
            '&:hover': {
              backgroundColor: '#c35309',
            },
          }}
          variant="contained"
        >
          Login
        </Button>
      </Box>
    </form>
  );
};
