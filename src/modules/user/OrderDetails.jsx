import closeIcon from '../../images/close-icon.svg';
import { OrderDetailsCard } from './OrderDetailsCard';
import { v4 as uuidv4 } from 'uuid';

export const OrderDetails = ({ closeModal, order }) => {
  const orderDate = order.updatedAt.slice(0, 10).split('-').reverse().join('/');
  const orderItemsQuantity = order.items.reduce(
    (sum, el) => sum + el.quantity,
    0
  );

  return (
    <div className="order-wrapper">
      <div>
        <button
          onClick={closeModal}
          className="one-product--close-btn"
          style={{ top: '20px', right: '20px' }}
        >
          <img src={closeIcon} alt="close icon" />
        </button>
      </div>
      <div>
        <h3 style={{ margin: '10px 0 20px 0', textAlign: 'center' }}>
          Order details ID {order.id}
        </h3>
      </div>
      <div
        className="order--cards-wrapper"
        style={order.items.length >= 4 ? { overflowY: 'scroll' } : {}}
      >
        {order.items.map((item) => {
          return <OrderDetailsCard key={uuidv4()} {...item} />;
        })}
      </div>
      <div className="order--order-info-wrapper">
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <span style={{ width: '80px' }}>Date:</span>
            <span className="fw-500">{orderDate}</span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              marginTop: '10px',
            }}
          >
            <span style={{ width: '80px' }}>Address:</span>
            <span className="fw-500">
              {`${order.shipment.address}, ${order.shipment.city}, ${order.shipment.country}`}
            </span>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <span style={{ width: '80px' }}>Items:</span>
            <span className="fw-500">{orderItemsQuantity}</span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              marginTop: '10px',
            }}
          >
            <span style={{ width: '80px' }}>Total:</span>
            <span className="fw-500">$ {order.totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
