import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const OrderHistoryCard = () => {
  const params = useParams();

  // console.log(params.orderId);

  return (
    <div className="user-settings--order">
      <div className="order--order-id-wrapper">
        <span style={{ paddingLeft: '20px' }}>Order ID:</span>
        <Link to={`/settings/order-details/333333`}>
          <span className="fw-500" style={{ color: 'blue' }}>
            333333
          </span>
        </Link>
      </div>
      <div className="order--order-price-wrapper">
        <span>Price:</span>
        <span className="fw-500" style={{ paddingRight: '20px' }}>
          $ 775.19
        </span>
      </div>
      <div className="order--order-date-wrapper">
        <span style={{ paddingLeft: '20px' }}>Date:</span>
        <span className="fw-500">06.04.2022</span>
      </div>
    </div>
  );
};
