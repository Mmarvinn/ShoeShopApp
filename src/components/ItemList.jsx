import { Item } from './Item';
import { getProducts } from '../modules/product/getProduct';
import { useEffect, useState } from 'react';

export const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedData = await getProducts(5);
      setProducts(fetchedData);
    })();
  }, []);

  console.log(products);
  return (
    <div className="product-list">
      {products.map((product) => {
        return <Item key={product.id} data={product} />;
      })}
    </div>
  );
};
