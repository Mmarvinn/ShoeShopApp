import { favouriteUrl } from '../../api';
import { privateRequestHeadersAccept } from './privateRequest';

export const favouriteApi = async (productId, method) => {
  const response = await fetch(favouriteUrl(productId), {
    method: method,
    headers: privateRequestHeadersAccept(),
  });

  return response.json();
};
