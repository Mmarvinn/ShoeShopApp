import { getFavouritesUrl } from '../../api';
import { privateRequestHeadersAccept } from './privateRequest';

export const getFavouritesApi = async (offset, limit) => {
  const response = await fetch(getFavouritesUrl(offset, limit), {
    method: 'GET',
    headers: privateRequestHeadersAccept(),
  });

  return response.json();
};
