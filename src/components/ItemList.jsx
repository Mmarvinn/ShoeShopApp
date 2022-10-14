import { Item } from './Item';
import { Loading } from './Loading';

export const ItemList = ({ products }) => {
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
