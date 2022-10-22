import { ItemList } from './ItemList';
import { SearchPanel } from './searchPanel/SearchPanel';
import Button from '@mui/material/Button';
import { getProductsApi } from '../modules/product/getProduct';
import { useEffect, useState } from 'react';
import { getProductsBySearchApi } from '../modules/product/getProductsBySearch';
import { SearchNotFound } from './searchPanel/SearchNotFound';
import { getAllProductsWithoutChoosenCategoryApi } from '../modules/product/getAllProducts';
import { useMakeRequest } from '../hooks/useMakeRequest';

export const HomePage = () => {
  const { request, loading, error } = useMakeRequest();
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSorting, setSelectedSorting] = useState('latest');
  const [textOfFind, setTextOfFind] = useState('');
  const [page, setPage] = useState(0);
  const productsPerPage = 16;
  const offset = page * productsPerPage;

  const onSearch = async (userFindValue) => {
    setTextOfFind(userFindValue);

    if (userFindValue.length >= 3) {
      setSelectedCategory(null);
      setPage(0);
      const newProducts = await request(
        getProductsBySearchApi,
        userFindValue,
        0,
        productsPerPage
      );
      setProducts(newProducts);
    }

    if (userFindValue.length === 0) {
      setPage(0);
      const products = await request(
        getAllProductsWithoutChoosenCategoryApi,
        0,
        productsPerPage,
        selectedSorting
      );
      setProducts(products);
    }
  };

  const handleClearCategory = async () => {
    setSelectedCategory(null);
    setPage(0);
    const products = await request(
      getAllProductsWithoutChoosenCategoryApi,
      0,
      productsPerPage,
      selectedSorting
    );
    setProducts(products);
  };

  const setCategory = async (category) => {
    setTextOfFind('');
    setPage(0);
    setSelectedCategory(category);
    console.log(`func setCategory, page now: ${page}`);
    const newProducts = await request(
      getProductsApi,
      category,
      0,
      productsPerPage,
      selectedSorting
    );
    setProducts(newProducts);
  };

  const onSorting = async (sort) => {
    setPage(0);
    setSelectedSorting(sort);
    if (selectedCategory) {
      const newProducts = await request(
        getProductsApi,
        selectedCategory,
        0,
        productsPerPage,
        sort
      );
      setProducts(newProducts);
    } else {
      const products = await request(
        getAllProductsWithoutChoosenCategoryApi,
        0,
        productsPerPage,
        sort
      );
      setProducts(products);
    }
  };

  const loadMore = async () => {
    let newProducts = null;
    const newPage = page + 1;
    const newOffset = newPage * productsPerPage;
    setPage(newPage);
    switch (true) {
      case !!selectedCategory: {
        newProducts = await request(
          getProductsApi,
          selectedCategory,
          newOffset,
          productsPerPage,
          selectedSorting
        );
        break;
      }

      case !!textOfFind: {
        console.log(textOfFind);
        newProducts = await request(
          getProductsBySearchApi,
          textOfFind,
          newOffset,
          productsPerPage
        );
        break;
      }

      default: {
        newProducts = await request(
          getAllProductsWithoutChoosenCategoryApi,
          newOffset,
          productsPerPage,
          selectedSorting
        );
      }
    }

    setProducts((prevState) => {
      return [...prevState, ...newProducts];
    });
  };

  useEffect(() => {
    const getInitialAllProducts = async () => {
      const products = await request(
        getAllProductsWithoutChoosenCategoryApi,
        offset,
        productsPerPage,
        selectedSorting
      );
      setProducts(products);
    };

    getInitialAllProducts();
  }, []);

  console.log(loading, error);
  return (
    <div>
      <SearchPanel
        textOfFind={textOfFind}
        selectedCategory={selectedCategory}
        setCategory={setCategory}
        onSorting={onSorting}
        onSearch={onSearch}
        sortingDisabled={!!textOfFind}
        handleClearCategory={handleClearCategory}
      />
      {products.length !== 0 ? (
        <>
          <ItemList products={products} />
          <Button
            onClick={loadMore}
            variant="contained"
            size="large"
            sx={{ m: '50px', textTransform: 'none' }}
          >
            Load more...
          </Button>
        </>
      ) : (
        <SearchNotFound />
      )}
    </div>
  );
};
