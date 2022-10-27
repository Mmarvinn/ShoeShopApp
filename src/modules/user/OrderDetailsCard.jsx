// import testImage from '../../images/test-image.jpg';

export const OrderDetailsCard = () => {
  return (
    <div className="order--card">
      <div className="card--img-wrapper">
        <img className="card--img" /* src={testImage} */ alt="product" />
      </div>
      <div className="card--title-wrapper">
        <h4>Title product</h4>
        <div style={{ padding: '20px 0' }}>
          <span>Items:</span>
          <span className="fw-500" style={{ paddingLeft: '20px' }}>
            1
          </span>
        </div>
      </div>
      <div className="card--price-wrapper">
        <span style={{ width: '100%', paddingLeft: '40px' }}>Price:</span>
        <span className="fw-500" style={{ width: '100%', paddingLeft: '40px' }}>
          $175.19
        </span>
      </div>
    </div>
  );
};
