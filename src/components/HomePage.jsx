import { ItemList } from './ItemList';
import { SearchPanel } from './searchPanel/SearchPanel';
import Button from '@mui/material/Button';
import { getProductsApi } from '../modules/product/getProduct';
import { useEffect, useState } from 'react';
import { getProductsBySearchApi } from '../modules/product/getProductsBySearch';

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectedSorting, setSelectedSorting] = useState('latest');
  const [isNewCategoryOrSorting, setIsNewCategoryOrSorting] = useState(false);
  const [findValue, setFindValue] = useState('');
  const [isProductsOfFind, setIsProductsOfFind] = useState(false);
  const [loadMoreFindProducts, setLoadMoreFindProducts] = useState(false);
  const [page, setPage] = useState(0);
  const productsPerPage = 16;

  const userSearch = (userFindValue) => {
    setLoadMoreFindProducts(false);
    setIsProductsOfFind(true);
    setPage(0);
    setFindValue(userFindValue);
  };

  console.log(findValue);

  const userCategory = (category) => {
    setIsProductsOfFind(false);
    setPage(0);
    setIsNewCategoryOrSorting(true);
    setSelectedCategory(category);
  };

  const userSort = (sort) => {
    setIsProductsOfFind(false);
    setPage(0);
    setIsNewCategoryOrSorting(true);
    setSelectedSorting(sort);
  };

  useEffect(() => {
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
      console.log(fetchedData);
      setProducts((prevState) => {
        if (loadMoreFindProducts) {
          return [...prevState, ...fetchedData];
        } else {
          return [...fetchedData];
        }
      });
    };

    if (isProductsOfFind) {
      getProductsBySearch(findValue, page);
    } else {
      getProducts(page, selectedCategory, selectedSorting);
    }
  }, [findValue, page, selectedCategory, selectedSorting]);

  const loadProducts = () => {
    setLoadMoreFindProducts(true);
    setIsNewCategoryOrSorting(false);
    setPage((prevState) => prevState + 1);
  };

  return (
    <div>
      <SearchPanel
        userCategory={userCategory}
        userSort={userSort}
        userSearch={userSearch}
        sortingDisabled={isProductsOfFind}
      />
      <ItemList products={products} />
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
