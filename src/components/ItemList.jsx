import { Link } from 'react-router-dom';
import { Item } from './Item';
import { Loading } from './Loading';
import { useLocation } from 'react-router-dom';

export const ItemList = ({ products }) => {
  const location = useLocation();
  return (
    <div className="product-list">
      {products.length !== 0 ? (
        products.map((product) => {
          return (
            <Link
              key={product.id}
              to={
                location.pathname.includes('home')
                  ? `/home/product/${product.id}`
                  : `/settings/favourites/product/${product.id}`
              }
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
