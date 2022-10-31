export const OrderDetailsCard = ({ orderedPrice, quantity, product }) => {
  return (
    <div className="order--card">
      <div className="card--img-wrapper">
        <img className="card--img" src={product.picture} alt="product" />
      </div>
      <div className="card--title-wrapper">
        <h4 className="card--title">{product.title}</h4>
        <div style={{ padding: '20px 0' }}>
          <span>Items:</span>
          <span className="fw-500" style={{ paddingLeft: '20px' }}>
            {quantity}
          </span>
        </div>
      </div>
      <div className="card--price-wrapper">
        <span style={{ width: '100%', paddingLeft: '40px' }}>Price:</span>
        <span className="fw-500" style={{ width: '100%', paddingLeft: '40px' }}>
          $ {orderedPrice}
        </span>
      </div>
    </div>
  );
};
