import { useEffect, useState } from 'react';
import { ItemList } from '../../components/ItemList';
import { getFavouritesApi } from './getFavourites';
import { useMakeRequest } from '../../hooks/useMakeRequest';

export const UserFavourites = () => {
  const { request, loading, error } = useMakeRequest();
  const [products, setProducts] = useState([]);
  const productsPerPage = 16;

  useEffect(() => {
    const getFavourites = async () => {
      const newProducts = await request(getFavouritesApi, 0, productsPerPage);
      console.log(newProducts);
      setProducts(newProducts);
    };

    getFavourites();
  }, []);

  // console.log(products);

  return (
    <div className="w-100" style={{ margin: '0 10px' }}>
      {products.length !== 0 ? (
        <ItemList products={products} />
      ) : (
        <h2>You have no Favourite products</h2>
      )}
    </div>
  );
};
