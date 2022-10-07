import { getProductsByCategory } from '../../api';

export const getProducts = async (category) => {
  try {
    const response = await fetch(getProductsByCategory(category));

    return await response.json();
  } catch (err) {
    console.log(err.message);
  }
};

// {
//   method: 'GET',
//   mode: 'no-cors',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// }
