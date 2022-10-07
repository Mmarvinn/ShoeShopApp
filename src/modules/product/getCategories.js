import { CATEGORIES } from '../../api';

export const getCategories = async () => {
  try {
    const response = await fetch(CATEGORIES);

    return await response.json();
  } catch (err) {
    console.log(err.message);
  }
};
