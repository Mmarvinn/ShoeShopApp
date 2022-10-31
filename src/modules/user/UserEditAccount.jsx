import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormHelperText } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

import {
  validateFullName,
  validateEmail,
  validatePhone,
  validateUserMainInfoInputs,
} from '../../services/validationInputs';
import { useMakeRequest } from '../../hooks/useMakeRequest';
import { getCountriesApi } from './getCountries';
import { updateUserAccount } from '../user/redux/userSlice';

export const UserEditAccount = () => {
  const userData = useSelector((state) => state.user.data || {});
  const dispatch = useDispatch();
  const { request, error, loading } = useMakeRequest();
  const [countries, setCountries] = useState([]);
  const [fullNameValidation, setFullNameValidation] = useState(false);
  const [phoneValidation, setPhoneValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [values, setValues] = useState({});

  const [updateUserInfoError, setUpdateUserInfoError] = useState({
    error: false,
    errorStatus: null,
  });

  const styleForInputs = {
    mt: '25px',
    width: '376px',
    height: '36px',
  };

  const countryChange = (event, newValue) => {
    setValues((prevState) => {
      return { ...prevState, country: newValue };
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
          console.log('Info updated successfully');
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

  useEffect(() => {
    const getCountries = async () => {
      const countries = await request(getCountriesApi);

      setCountries(countries);
    };

    getCountries();
  }, []);

  useEffect(() => {
    setValues((prevState) => ({
      ...prevState,
      phone: userData.phone,
      email: userData.email,
      fullName: userData.fullName,
      country: userData.country,
      city: userData.city,
      address: userData.address,
    }));
  }, [userData]);

  return (
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
            value={values.fullName || ''}
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
            value={values.email || ''}
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
            type="tel"
            value={values.phone || ''}
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
            value={values.country || ''}
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
            value={values.city || ''}
            onChange={handleChange('city')}
          />
        </Box>
        <Box sx={styleForInputs}>
          <TextField
            fullWidth
            size="small"
            label="Address"
            type="text"
            value={values.address || ''}
            onChange={handleChange('address')}
          />
        </Box>
        <Box>
          <Button
            fullWidth
            disabled={fullNameValidation || emailValidation || phoneValidation}
            type="submit"
            sx={{
              mt: '40px',
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
            Save
          </Button>
        </Box>
      </form>
    </div>
  );
};
