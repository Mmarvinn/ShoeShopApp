// const BASE_URL = 'https://apiko-2021-spring-course-api.herokuapp.com';

export const CATEGORIES = '/api/categories';
export const USER_SIGN_IN =
  'https://apiko-2021-spring-course-api.herokuapp.com/api/auth/register';

export const getProductsByCategory = (category) => {
  return `/api/categories/${category}/products?offset=0&limit=16&sortBy=latest`;
};
