import { getAllProductsWithoutChoosenCategoryUrl } from '../../api';

export const getAllProductsWithoutChoosenCategoryApi = async (
  offset,
  limit,
  sortBy
) => {
  const response = await fetch(
    getAllProductsWithoutChoosenCategoryUrl(offset, limit, sortBy)
  );

  return await response.json();
};
