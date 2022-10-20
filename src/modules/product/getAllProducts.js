import { getAllProductsWithoutChoosenCategoryUrl } from '../../api';

export const getAllProductsWithoutChoosenCategoryApi = async (
  offset,
  limit,
  sortBy
) => {
  try {
    const response = await fetch(
      getAllProductsWithoutChoosenCategoryUrl(offset, limit, sortBy)
    );

    return await response.json();
  } catch (err) {
    console.log(err.message);
  }
};
