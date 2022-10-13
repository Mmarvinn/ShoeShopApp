const SORTING = 'SORTING';
const CATEGORY = 'CATEGORY';

export const getSortingStorage = () => {
  return sessionStorage.getItem(SORTING);
};

export const setSortingStorage = (value) => {
  sessionStorage.setItem(SORTING, value);
};

export const getCategoryStorage = () => {
  return sessionStorage.getItem(CATEGORY);
};

export const setCategoryStorage = (value) => {
  sessionStorage.setItem(CATEGORY, value);
};
