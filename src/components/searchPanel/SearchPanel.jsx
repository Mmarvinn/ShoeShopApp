import { SearchField } from './SearchField';
import { CategorySearch } from './CategorySearch';
import { Sorting } from './Sorting';

export const SearchPanel = ({
  setCategory,
  onSorting,
  onSearch,
  sortingDisabled,
  setIsLoadAllProducts,
}) => {
  return (
    <div className="search-panel">
      <SearchField onSearch={onSearch} />
      <CategorySearch
        setCategory={setCategory}
        setIsLoadAllProducts={setIsLoadAllProducts}
      />
      <Sorting onSorting={onSorting} sortingDisabled={sortingDisabled} />
    </div>
  );
};
