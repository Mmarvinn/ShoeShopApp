import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react';
import { getCategories } from '../../modules/product/getCategories';

export function CategorySearch() {
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

  const handleChange = (e, newValue) => {
    console.log(newValue.id);
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={categories}
      onChange={handleChange}
      sx={{ width: 250 }}
      renderInput={(categories) => (
        <TextField {...categories} placeholder="Choose category" />
      )}
    />
  );
}
