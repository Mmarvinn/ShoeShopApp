import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react';
import { getCategories } from '../../modules/product/getCategories';
import categoriesImg from '../../images/category-icon.svg';

export function CategorySearch({ setCategory, handleClear, selectedCategory }) {
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
    if (newValue) {
      setCategory(newValue.id);
    } else {
      handleClear();
    }
  };

  return (
    <div className="search-panel--category-wrapper">
      <img
        src={categoriesImg}
        className="search-panel--category-icon"
        alt="category icon"
      />
      <Autocomplete
        clearOnBlur
        clearOnEscape
        value={categories.find((el) => el.id === selectedCategory) || null}
        options={categories}
        onChange={handleChange}
        style={{
          borderRadius: '5px',
          width: '290px',
          margin: '0 10px',
        }}
        renderInput={(props) => {
          return (
            <TextField
              {...props}
              sx={{ bgcolor: '#F9FAFB' }}
              placeholder="Choose category"
              size="small"
            />
          );
        }}
      />
    </div>
  );
}
