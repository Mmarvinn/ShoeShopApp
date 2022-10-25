import { getProductsBySearchUrl } from '../../api';
import { privateRequestHeadersAccept } from '../user/privateRequest';

export const getProductsBySearchApi = async (keywords, offset, limit) => {
  try {
    const response = await fetch(
      getProductsBySearchUrl(keywords, offset, limit),
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
