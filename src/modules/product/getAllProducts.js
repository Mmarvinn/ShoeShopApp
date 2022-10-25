import { getAllProductsWithoutChoosenCategoryUrl } from '../../api';
import { privateRequestHeadersAccept } from '../user/privateRequest';

export const getAllProductsWithoutChoosenCategoryApi = async (
  offset,
  limit,
  sortBy
) => {
  const response = await fetch(
    getAllProductsWithoutChoosenCategoryUrl(offset, limit, sortBy),
    {
      method: 'GET',
      headers: privateRequestHeadersAccept(),
    }
  );

  return await response.json();
};
