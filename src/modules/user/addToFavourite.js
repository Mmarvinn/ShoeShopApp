import { favouriteUrl } from '../../api';
import { privateRequestHeadersAccept } from './privateRequest';

export const addFavouriteApi = async (productId) => {
  const response = await fetch(favouriteUrl(productId), {
    method: 'POST',
    headers: privateRequestHeadersAccept(),
  });

  return response.json();
};

export const deleteFavouriteApi = async (productId) => {
  const response = await fetch(favouriteUrl(productId), {
    method: 'DELETE',
    headers: privateRequestHeadersAccept(),
  });

  return response.json();
};
