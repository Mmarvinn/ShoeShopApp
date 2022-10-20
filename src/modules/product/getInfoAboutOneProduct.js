import { getInfoAboutOneProductApi } from '../../api';

export const getInfoAboutOneProduct = async (productId) => {
  try {
    const response = await fetch(getInfoAboutOneProductApi(productId));

    return await response.json();
  } catch (err) {
    console.log(err.message);
  }
};
