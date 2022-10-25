import closeIcon from '../../images/close-icon.svg';
import { OrderDetailsCard } from './OrderDetailsCard';

export const OrderDetails = ({ closeModal }) => {
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
        <h3 style={{ margin: '25px 0', textAlign: 'center' }}>
          Order details ID 333333
        </h3>
      </div>
      <div className="order--cards-wrapper">
        <OrderDetailsCard />
        <OrderDetailsCard />
        <OrderDetailsCard />
      </div>
      <div className="order--order-info-wrapper">
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <span style={{ width: '80px' }}>Date:</span>
            <span className="fw-500">05/10/2022</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <span style={{ width: '80px' }}>Address:</span>
            <span className="fw-500">13 Street, Kyiv, Ukraine</span>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <span style={{ width: '80px' }}>Items:</span>
            <span className="fw-500">4</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <span style={{ width: '80px' }}>Total:</span>
            <span className="fw-500">$ 775.19</span>
          </div>
        </div>
      </div>
    </div>
  );
};
