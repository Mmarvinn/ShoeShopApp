import { ACCOUNT_PASSWORD } from '../../api';
import { privateRequestHeadersAcceptAndContent } from '../user/privateRequest';

export const updateUserPasswordApi = async (data) => {
  const response = await fetch(ACCOUNT_PASSWORD, {
    method: 'PUT',
    headers: privateRequestHeadersAcceptAndContent(),
    body: JSON.stringify(data),
  });

  return response;
};
