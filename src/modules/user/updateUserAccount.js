import { ACCOUNT } from '../../api';
import { privateRequestHeadersAcceptAndContent } from '../user/privateRequest';

export const updateUserAccountApi = async (data) => {
  const response = await fetch(ACCOUNT, {
    method: 'PUT',
    headers: privateRequestHeadersAcceptAndContent(),
    body: JSON.stringify(data),
  });

  return response;
};
