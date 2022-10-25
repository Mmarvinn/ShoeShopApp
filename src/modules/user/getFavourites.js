import { getFavouritesUrl } from '../../api';
import { privateRequestHeadersContentType } from './privateRequest';

export const getFavouritesApi = async (offset, limit) => {
  const response = fetch(getFavouritesUrl(offset, limit), {
    method: 'GET',
    headers: privateRequestHeadersContentType(),
  });

  return await response.json();
};
