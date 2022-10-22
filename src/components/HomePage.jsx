import { ItemList } from './ItemList';
import { SearchPanel } from './searchPanel/SearchPanel';
import Button from '@mui/material/Button';
import { getProductsApi } from '../modules/product/getProduct';
import { useEffect, useState } from 'react';
import { getProductsBySearchApi } from '../modules/product/getProductsBySearch';
import { SearchNotFound } from './searchPanel/SearchNotFound';
import { getAllProductsWithoutChoosenCategoryApi } from '../modules/product/getAllProducts';

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedSorting, setSelectedSorting] = useState('latest');
  const [isNewCategoryOrSorting, setIsNewCategoryOrSorting] = useState(false);
  const [textOfFind, setTextOfFind] = useState('');
  const [isProductsOfFind, setIsProductsOfFind] = useState(false);
  const [loadMoreFindProducts, setLoadMoreFindProducts] = useState(false);
  const [page, setPage] = useState(0);
  const [isLoadAllProducts, setIsLoadAllProducts] = useState(true);
  const productsPerPage = 16;

  const onSearch = (userFindValue) => {
    setIsLoadAllProducts(false);
    setLoadMoreFindProducts(false);
    setIsProductsOfFind(true);
    setPage(0);
    setTextOfFind(userFindValue);
  };

  const setCategory = (category) => {
    setIsLoadAllProducts(false);
    setIsProductsOfFind(false);
    setPage(0);
    setIsNewCategoryOrSorting(true);
    setSelectedCategory(category);
  };

  const onSorting = (sort) => {
    setIsProductsOfFind(false);
    setPage(0);
    setIsNewCategoryOrSorting(true);
    setSelectedSorting(sort);
  };

  useEffect(() => {
    const getAllProductsWithoutChoosenCategory = async (startPage, sort) => {
      const fetchedData = await getAllProductsWithoutChoosenCategoryApi(
        startPage * productsPerPage,
        productsPerPage,
        sort
      );

      setProducts((prevState) => {
        if ((loadMoreFindProducts, !isNewCategoryOrSorting)) {
          return [...prevState, ...fetchedData];
        } else {
          return [...fetchedData];
        }
      });
    };

    const getProducts = async (startPage, category, sort) => {
      const fetchedData = await getProductsApi(
        category,
        startPage * productsPerPage,
        productsPerPage,
        sort
      );

      setProducts((prevState) => {
        if (isNewCategoryOrSorting) {
          return [...fetchedData];
        } else {
          return [...prevState, ...fetchedData];
        }
      });
    };

    const getProductsBySearch = async (keywords, startPage) => {
      const fetchedData = await getProductsBySearchApi(
        keywords,
        startPage * productsPerPage,
        productsPerPage
      );

      setProducts((prevState) => {
        if (loadMoreFindProducts) {
          return [...prevState, ...fetchedData];
        } else {
          return [...fetchedData];
        }
      });
    };

    if (isLoadAllProducts) {
      getAllProductsWithoutChoosenCategory(page, selectedSorting);
    } else {
      if (isProductsOfFind) {
        getProductsBySearch(textOfFind, page);
      } else {
        getProducts(page, selectedCategory, selectedSorting);
      }
    }
  }, [textOfFind, page, selectedCategory, selectedSorting, isLoadAllProducts]);

  const loadProducts = () => {
    setLoadMoreFindProducts(true);
    setIsNewCategoryOrSorting(false);
    setPage((prevState) => prevState + 1);
  };

  return (
    <div>
      <SearchPanel
        setCategory={setCategory}
        onSorting={onSorting}
        onSearch={onSearch}
        sortingDisabled={isProductsOfFind}
        setIsLoadAllProducts={setIsLoadAllProducts}
      />
      {products.length !== 0 ? (
        <>
          <ItemList products={products} />
          <Button
            onClick={loadProducts}
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
