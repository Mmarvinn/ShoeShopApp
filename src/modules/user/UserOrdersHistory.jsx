import { OrderHistoryCard } from './OrderHistoryCard';

export const UserOrdersHistory = () => {
  return (
    <div className="user-settings--orders-history-list">
      <OrderHistoryCard />
      <OrderHistoryCard />
    </div>
  );
};
