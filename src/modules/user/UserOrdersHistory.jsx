import { OrderHistoryCard } from './OrderHistoryCard';

export const UserOrdersHistory = () => {
  return (
    <div className="user-settings--orders-history-list">
      {true ? (
        <OrderHistoryCard />
      ) : (
        <h2 style={{ margin: '50px 0' }}>You haven't bought any products</h2>
      )}
    </div>
  );
};
