import { SearchField } from './SearchField';
import { CategorySearch } from './CategorySearch';
import { Sorting } from './Sorting';

export const SearchPanel = ({
  userCategory,
  userSort,
  userSearch,
  sortingDisabled,
}) => {
  return (
    <div className="search-panel">
      <SearchField userSearch={userSearch} />
      <CategorySearch userCategory={userCategory} />
      <Sorting userSort={userSort} sortingDisabled={sortingDisabled} />
    </div>
  );
};
