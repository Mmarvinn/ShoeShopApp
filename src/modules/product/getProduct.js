import { getProductsByCategory } from '../../api';

export const getProducts = async (category, offset, limit, sortBy) => {
  try {
    const response = await fetch(
      getProductsByCategory(category, offset, limit, sortBy)
    );

    return await response.json();
  } catch (err) {
    console.log(err.message);
  }
};
