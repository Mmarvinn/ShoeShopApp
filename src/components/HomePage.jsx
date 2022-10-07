import { ItemList } from './ItemList';
import { SearchPanel } from './searchPanel/SearchPanel';

export const HomePage = () => {
  return (
    <div>
      <SearchPanel />
      <ItemList />
    </div>
  );
};
