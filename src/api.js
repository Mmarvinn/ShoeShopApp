// const BASE_URL = 'https://apiko-2021-spring-course-api.herokuapp.com';

export const CATEGORIES = '/api/categories';
export const USER_SIGN_IN = '/api/auth/register';
export const USER_LOG_IN = '/api/auth/login';
export const IS_LOGGED_IN = '/api/account';

export const getProductsByCategory = (category, offset, limit, sortBy) => {
  return `/api/categories/${category}/products?offset=${offset}&limit=${limit}&sortBy=${sortBy}`;
};
