const BASE_URL = 'https://apiko-2021-spring-course-api.herokuapp.com';

export const CATEGORIES = BASE_URL + '/api/categories';
export const USER_SIGN_IN =
  'https://apiko-2021-spring-course-api.herokuapp.com/api/auth/register';

export const getProductsByCategory = (category) => {
  return (
    BASE_URL +
    `/api/categories/${category}/products?offset=0&limit=16&sortBy=latest`
  );
};
