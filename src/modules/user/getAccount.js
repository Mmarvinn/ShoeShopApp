import { GET_ACCOUNT } from '../../api';
import { privateRequestHeadersContentType } from './privateRequest';

export const getAccount = async () => {
  const response = await fetch(GET_ACCOUNT, {
    method: 'GET',
    headers: privateRequestHeadersContentType(),
  });

  return response.json();
};
