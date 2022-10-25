import { getInfoAboutOneProductApi } from '../../api';
import { privateRequestHeadersAccept } from '../user/privateRequest';

export const getInfoAboutOneProduct = async (productId) => {
  try {
    const response = await fetch(getInfoAboutOneProductApi(productId), {
      method: 'GET',
      headers: privateRequestHeadersAccept(),
    });

    return await response.json();
  } catch (err) {
    console.log(err.message);
  }
};
