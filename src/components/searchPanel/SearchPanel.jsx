import { SearchField } from './SearchField';
import { CategorySearch } from './CategorySearch';
import { Sorting } from './Sorting';

export const SearchPanel = ({
  setCategory,
  onSorting,
  onSearch,
  sortingDisabled,
  handleClearCategory,
  selectedCategory,
  textOfFind,
}) => {
  return (
    <div className="search-panel">
      <SearchField onSearch={onSearch} value={textOfFind} />
      <CategorySearch
        selectedCategory={selectedCategory}
        setCategory={setCategory}
        handleClear={handleClearCategory}
      />
      <Sorting onSorting={onSorting} sortingDisabled={sortingDisabled} />
    </div>
  );
};
