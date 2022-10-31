import { getUserOrdersUrl } from '../../api';
import { privateRequestHeadersAccept } from './privateRequest';

export const getUserOrdersApi = async (offset, limit) => {
  const response = await fetch(getUserOrdersUrl(offset, limit), {
    method: 'GET',
    headers: privateRequestHeadersAccept(),
  });

  return response.json();
};
