import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react';
import { getCategories } from '../../modules/product/getCategories';
import { setCategoryStorage } from '../../services/sessionStorage';

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
    setCategoryStorage(newValue.id);
  };

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={categories}
      onChange={handleChange}
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
  );
}
