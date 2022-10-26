import { ACCOUNT } from '../../api';
import { privateRequestHeadersContentType } from './privateRequest';

export const getAccount = async () => {
  const response = await fetch(ACCOUNT, {
    method: 'GET',
    headers: privateRequestHeadersContentType(),
  });

  return response.json();
};
