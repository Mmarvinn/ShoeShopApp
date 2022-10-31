import { useEffect, useState } from 'react';

import { OrderHistoryCard } from './OrderHistoryCard';
import { useMakeRequest } from '../../hooks/useMakeRequest';
import { getUserOrdersApi } from './getOrders';

export const UserOrdersHistory = () => {
  const { request, loading, error } = useMakeRequest();
  const [orders, setOrders] = useState([]);
  const productsPerPage = 16;

  useEffect(() => {
    const getUserOrders = async () => {
      const fetchedData = await request(getUserOrdersApi, 0, productsPerPage);

      setOrders(fetchedData);
    };
    getUserOrders();
  }, []);

  return (
    <div className="user-settings--orders-history-list">
      {orders.length !== 0 ? (
        orders.map((order) => {
          return <OrderHistoryCard key={order.id} order={order} />;
        })
      ) : (
        <h2 style={{ margin: '50px 0' }}>You haven't bought any products</h2>
      )}
    </div>
  );
};
