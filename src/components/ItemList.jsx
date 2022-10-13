import { Item } from './Item';
import { getProducts } from '../modules/product/getProduct';
import { useEffect, useState } from 'react';
import { Loading } from './Loading';
import {
  getCategoryStorage,
  getSortingStorage,
} from '../services/sessionStorage';

export const ItemList = ({ limit }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedSorting, setSelectedSorting] = useState('latest');

  useEffect(() => {
    (async () => {
      const fetchedData = await getProducts(
        selectedCategory,
        0,
        limit,
        selectedSorting
      );
      setProducts(fetchedData);
    })();
  }, [limit, selectedCategory, selectedSorting]);

  return (
    <div className="product-list">
      {products !== [] ? (
        products.map((product) => {
          return <Item key={product.id} data={product} />;
        })
      ) : (
        <Loading isOpen={true} />
      )}
    </div>
  );
};
