import { GET_ACCOUNT } from '../../api';
import { privateRequestHeaders } from './privateRequest';

export const getAccount = async () => {
  const response = await fetch(GET_ACCOUNT, {
    method: 'GET',
    headers: privateRequestHeaders(),
  });

  return response.json();
};
