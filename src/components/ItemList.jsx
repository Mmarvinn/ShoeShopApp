import { Link } from 'react-router-dom';
import { Item } from './Item';
import { Loading } from './Loading';

export const ItemList = ({ products }) => {
  return (
    <div className="product-list">
      {products !== [] ? (
        products.map((product) => {
          return (
            <Link
              key={product.id}
              to={`/home/product/${product.id}`}
              style={{ color: 'black' }}
            >
              <Item data={product} />
            </Link>
          );
        })
      ) : (
        <Loading isOpen={true} />
      )}
    </div>
  );
};
