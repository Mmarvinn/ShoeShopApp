import { SearchField } from './SearchField';
import { CategorySearch } from './CategorySearch';
import { Sorting } from './Sorting';

export const SearchPanel = ({
  setCategory,
  onSorting,
  onSearch,
  sortingDisabled,
}) => {
  return (
    <div className="search-panel">
      <SearchField onSearch={onSearch} />
      <CategorySearch setCategory={setCategory} />
      <Sorting onSorting={onSorting} sortingDisabled={sortingDisabled} />
    </div>
  );
};
