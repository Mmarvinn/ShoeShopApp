import { GET_COUNTRIES } from '../../api';

export const getCountriesApi = async () => {
  const countries = await fetch(GET_COUNTRIES);

  return countries.json();
};
