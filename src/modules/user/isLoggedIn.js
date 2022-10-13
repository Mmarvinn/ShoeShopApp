import { IS_LOGGED_IN } from '../../api';
import { privateRequestHeaders } from './privateRequest';

export const isLoggedIn = async () => {
  const response = await fetch(IS_LOGGED_IN, {
    method: 'GET',
    headers: privateRequestHeaders(),
  });

  return response;
};
