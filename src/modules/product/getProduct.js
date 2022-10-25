import { getProductsByCategory } from '../../api';
import { privateRequestHeadersAccept } from '../user/privateRequest';

export const getProductsApi = async (category, offset, limit, sortBy) => {
  try {
    const response = await fetch(
      getProductsByCategory(category, offset, limit, sortBy),
      {
        method: 'GET',
        headers: privateRequestHeadersAccept(),
      }
    );

    return await response.json();
  } catch (err) {
    console.log(err.message);
  }
};
