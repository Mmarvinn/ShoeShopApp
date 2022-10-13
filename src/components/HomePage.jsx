import { ItemList } from './ItemList';
import { SearchPanel } from './searchPanel/SearchPanel';
import Button from '@mui/material/Button';
import { useState } from 'react';

export const HomePage = () => {
  const startedLimit = 16;

  const [limit, setLimit] = useState(startedLimit);

  const loadProducts = () => {
    setLimit((prevState) => prevState + startedLimit);
  };

  return (
    <div>
      <SearchPanel />
      <ItemList limit={limit} />
      <Button
        onClick={loadProducts}
        variant="contained"
        size="large"
        sx={{ m: '50px', textTransform: 'none' }}
      >
        Load more...
      </Button>
    </div>
  );
};
