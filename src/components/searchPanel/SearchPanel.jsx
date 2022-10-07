import { SearchField } from './SearchField';
import { CategorySearch } from './CategorySearch';
import { Sorting } from './Sorting';

export const SearchPanel = () => {
  return (
    <div className="search-panel">
      <SearchField />
      <CategorySearch />
      <Sorting />
    </div>
  );
};
