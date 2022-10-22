import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react';
import { getCategories } from '../../modules/product/getCategories';
import categoriesImg from '../../images/category-icon.svg';
import ClearIcon from '@mui/icons-material/Clear';

export function CategorySearch({ setCategory, setIsLoadAllProducts }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedData = await getCategories();
      setCategories(
        fetchedData.map(({ name, ...rest }) => ({
          // rename key NAME to LABEL for Autocomplete component
          label: name,
          ...rest,
        }))
      );
    })();
  }, []);

  const handleChange = (event, newValue) => {
    setCategory(newValue.id);
  };

  const handleClear = () => {
    setIsLoadAllProducts(true);
  };
  // let bool = false;
  return (
    <div className="search-panel--category-wrapper">
      <img
        src={categoriesImg}
        className="search-panel--category-icon"
        alt="category icon"
      />
      <Autocomplete
        disablePortal
        // defaultValue
        options={categories}
        onChange={handleChange}
        clearIcon={<ClearIcon onClick={handleClear} fontSize="small" />}
        style={{
          borderRadius: '5px',
          width: '290px',
          margin: '0 10px',
        }}
        renderInput={(categories) => (
          <TextField
            {...categories}
            sx={{ bgcolor: '#F9FAFB' }}
            placeholder="Choose category"
            size="small"
          />
        )}
      />
    </div>
  );
}
