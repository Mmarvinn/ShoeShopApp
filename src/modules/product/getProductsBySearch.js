import { getProductsBySearchUrl } from '../../api';

export const getProductsBySearchApi = async (keywords, offset, limit) => {
  try {
    const response = await fetch(
      getProductsBySearchUrl(keywords, offset, limit)
    );

    return await response.json();
  } catch (err) {
    console.log(err.message);
  }
};
