import { Item } from './Item';
import { Loading } from './Loading';

export const ItemList = ({
  products,
  handleCloseAlert,
  changeAlertType,
  changeAlertProductName,
}) => {
  return (
    <div className="product-list">
      {products.length !== 0 ? (
        products.map((product) => {
          return (
            <Item
              key={product.id}
              data={product}
              handleCloseAlert={handleCloseAlert}
              changeAlertType={changeAlertType}
              changeAlertProductName={changeAlertProductName}
            />
          );
        })
      ) : (
        <Loading isOpen={true} />
      )}
    </div>
  );
};
