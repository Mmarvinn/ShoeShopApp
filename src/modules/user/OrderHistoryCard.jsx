import { useState } from 'react';

import { OrderDetailsModal } from '../user/OrderDetailsModal';

export const OrderHistoryCard = ({ order }) => {
  const { id, totalPrice, updatedAt } = order;
  const orderDate = updatedAt.slice(0, 10).split('-').reverse().join('.');
  const [openModal, setOpenModal] = useState(false);

  const toggleOpenModal = () => setOpenModal(!openModal);

  return (
    <>
      <div className="user-settings--order">
        <div className="order--order-id-wrapper">
          <span style={{ paddingLeft: '20px' }}>Order ID:</span>
          <span
            onClick={toggleOpenModal}
            className="fw-500 order--order-id"
            style={{ color: 'blue' }}
          >
            {id}
          </span>
        </div>
        <div className="order--order-price-wrapper">
          <span>Price:</span>
          <span className="fw-500" style={{ paddingRight: '20px' }}>
            $ {totalPrice}
          </span>
        </div>
        <div className="order--order-date-wrapper">
          <span style={{ paddingLeft: '20px' }}>Date:</span>
          <span className="fw-500">{orderDate}</span>
        </div>
      </div>
      <OrderDetailsModal
        onClose={toggleOpenModal}
        open={openModal}
        order={order}
      />
    </>
  );
};
