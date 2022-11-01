import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormHelperText } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';

import { getCountriesApi } from '../user/getCountries';
import { useMakeRequest } from '../../hooks/useMakeRequest';
import {
  validateFullName,
  validatePhone,
  validateInputLessThanThree,
} from '../../services/validationInputs';

export const CartShippingInfo = ({
  allQuantity,
  totalCost,
  values,
  setValues,
  handleSubmit,
}) => {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.data || {});
  const productsInCart = useSelector((state) => state.cart);

  const { request, error, loading } = useMakeRequest();
  const [countries, setCountries] = useState([]);
  const [fullNameValidation, setFullNameValidation] = useState(
    !Boolean(userData.fullName)
  );
  const [phoneValidation, setPhoneValidation] = useState(
    !Boolean(userData.phone)
  );
  const [cityValidation, setCityValidation] = useState(!Boolean(userData.city));
  const [addressValidation, setAddressValidation] = useState(
    !Boolean(userData.address)
  );

  const styleForInputs = {
    width: '220px',
    height: '36px',
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const countryChange = (event, newValue) => {
    setValues((prevState) => {
      return { ...prevState, country: newValue };
    });
  };

  const goHome = () => {
    navigate('/home');
  };

  useEffect(() => {
    const getCountries = async () => {
      const countries = await request(getCountriesApi);

      setCountries(countries);
    };

    getCountries();
  }, []);

  useEffect(() => {
    if (userData?.fullName) {
      setValues((prevState) => ({
        ...prevState,
        phone: userData.phone,
        fullName: userData.fullName,
        country: userData.country,
        city: userData.city,
        address: userData.address,
      }));
    }
  }, [userData]);

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4} direction="column">
        <Box
          sx={styleForInputs}
          style={fullNameValidation ? { paddingBottom: '65px' } : {}}
        >
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
        <Box
          sx={styleForInputs}
          style={phoneValidation ? { paddingBottom: '65px' } : {}}
        >
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
        <Box
          sx={styleForInputs}
          style={values.country ? {} : { paddingBottom: '45px' }}
        >
          <Autocomplete
            clearOnBlur
            clearOnEscape
            value={values.country || ''}
            options={countries}
            onChange={countryChange}
            renderInput={(props) => {
              return (
                <TextField
                  {...props}
                  error={!values.country}
                  label="Country"
                  size="small"
                />
              );
            }}
          />
          {!values.country && (
            <FormHelperText error={!values.country} id="my-helper-text">
              Choose the country, please.
            </FormHelperText>
          )}
        </Box>
        <Box
          sx={styleForInputs}
          style={cityValidation ? { paddingBottom: '45px' } : {}}
        >
          <TextField
            fullWidth
            error={cityValidation}
            size="small"
            label="City"
            type="text"
            value={values.city || ''}
            onChange={handleChange('city')}
            onKeyUp={() =>
              setCityValidation(validateInputLessThanThree(values.city))
            }
          />
          {cityValidation && (
            <FormHelperText error={cityValidation} id="my-helper-text">
              Enter the city, please.
            </FormHelperText>
          )}
        </Box>
        <Box
          sx={styleForInputs}
          style={addressValidation ? { paddingBottom: '65px' } : {}}
        >
          <TextField
            fullWidth
            error={addressValidation}
            size="small"
            label="Address"
            type="text"
            value={values.address || ''}
            onChange={handleChange('address')}
            onKeyUp={() =>
              setAddressValidation(validateInputLessThanThree(values.address))
            }
          />
          {addressValidation && (
            <FormHelperText error={addressValidation} id="my-helper-text">
              Enter your address, please.
            </FormHelperText>
          )}
        </Box>
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <span style={{ color: '#707070', marginRight: '86px' }}>
              Items:
            </span>
            <span className="fw-500">{allQuantity}</span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              marginTop: '10px',
            }}
          >
            <span style={{ color: '#707070', marginRight: '90px' }}>
              Total:
            </span>
            <span className="fw-500">$ {totalCost}</span>
          </div>
        </div>
        <Box>
          <Button
            fullWidth
            disabled={
              fullNameValidation ||
              phoneValidation ||
              cityValidation ||
              addressValidation ||
              !Boolean(values.country) ||
              Object.values(productsInCart).length === 0
            }
            type="submit"
            sx={{
              textTransform: 'none',
              backgroundColor: 'var(--orange-main)',
              width: 220,
              height: 36,
              fontSize: '12px',
              '&:hover': {
                backgroundColor: '#c35309',
              },
            }}
            variant="contained"
          >
            Confirms the purchase
          </Button>
        </Box>
        <Box>
          <Button
            fullWidth
            type="button"
            onClick={goHome}
            sx={{
              textTransform: 'none',
              width: 220,
              height: 36,
              fontSize: '12px',
              color: 'var(--orange-main)',
              borderColor: 'var(--orange-main)',
              '&:hover': {
                color: '#c35309',
                borderColor: '#c35309',
              },
            }}
            variant="outlined"
          >
            Continue shopping
          </Button>
        </Box>
      </Stack>
    </form>
  );
};
