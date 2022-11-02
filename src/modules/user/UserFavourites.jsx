import { useEffect, useState } from 'react';

import { ItemList } from '../../components/ItemList';
import { getFavouritesApi } from './getFavourites';
import { useMakeRequest } from '../../hooks/useMakeRequest';
import { Loading } from '../../components/Loading';

export const UserFavourites = () => {
  const { request, loading } = useMakeRequest();
  const [products, setProducts] = useState([]);
  const productsPerPage = 16;

  useEffect(() => {
    const getFavourites = async () => {
      const newProducts = await request(getFavouritesApi, 0, productsPerPage);
      setProducts(newProducts);
    };

    getFavourites();
  }, []);

  return (
    <div className="w-100" style={{ margin: '20px 35px' }}>
      {loading ? (
        <Loading />
      ) : products.length !== 0 ? (
        <ItemList products={products} />
      ) : (
        <h2 style={{ margin: '50px 0' }}>You have no Favourite products</h2>
      )}
    </div>
  );
};
