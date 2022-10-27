import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getInfoAboutOneProduct } from './getInfoAboutOneProduct';
import { useNavigate } from 'react-router-dom';
import closeIcon from '../../images/close-icon.svg';
import doneIcon from '../../images/done-icon.svg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const OneProductInfo = () => {
  const [productInfo, setProductInfo] = useState({});
  const [qtyOfProducts, setQtyOfProducts] = useState(1);
  const [toggleFavouriteBtn, setToggleFavouriteBtn] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const getProductInfo = async (productId) => {
      const fetchedData = await getInfoAboutOneProduct(productId);
      setProductInfo(fetchedData);
    };

    getProductInfo(params.productId);
  }, []);

  const increseQtyOfProducts = () => {
    setQtyOfProducts((prevState) => prevState + 1);
  };
  const decreseQtyOfProducts = () => {
    setQtyOfProducts((prevState) => {
      if (prevState <= 1) {
        return 1;
      } else {
        return prevState - 1;
      }
    });
  };

  const closeModal = () => {
    navigate(-1);
  };

  console.log(productInfo);

  return (
    <div className="one-product-wrapper">
      <button onClick={closeModal} className="one-product--close-btn">
        <img src={closeIcon} alt="close icon" />
      </button>
      <div className="one-product--content-wrapper">
        <div className="one-product--img-wrapper">
          <img
            className="one-product-img"
            src={productInfo.picture}
            alt="product"
          />
        </div>
        <div className="one-product--description-wrapper">
          <h3 className="one-product--title">{productInfo.title}</h3>
          <p className="one-product--description">
            {productInfo.description
              ? productInfo.description
              : 'Sorry, server has no description about this product'}
          </p>
          <div className="w-100">
            <span className="fw-700">PRICE</span>
            <span
              className="fw-700"
              style={{ marginLeft: '170px', fontSize: '18px' }}
            >
              ${productInfo.price}
            </span>
          </div>
          <div className="w-100">
            <button
              className="one-product--inc-dec-btn"
              onClick={decreseQtyOfProducts}
            >
              -
            </button>
            <span className="one-product-product-qty">{qtyOfProducts}</span>
            <button
              className="one-product--inc-dec-btn"
              onClick={increseQtyOfProducts}
            >
              +
            </button>
          </div>
          <div className="w-100">
            <span>Items:</span>
            <span
              className="fw-700"
              style={{ marginLeft: '20px', fontSize: '18px' }}
            >
              {qtyOfProducts}
            </span>
          </div>
          <div className="w-100">
            <span>Total:</span>
            <span
              className="fw-700"
              style={{ marginLeft: '25px', fontSize: '18px' }}
            >
              ${qtyOfProducts * productInfo.price}
            </span>
          </div>
        </div>
      </div>
      <div className="one-product--buttons-wrapper">
        <Stack spacing={3} direction="row">
          <Link to="">
            <Button
              fullWidth
              sx={{
                width: 220,
                height: 36,
                fontSize: '12px',
                color: 'var(--orange-main)',
                borderColor: 'var(--orange-main)',
                '&:hover': {
                  color: '#c35309',
                  borderColor: '#c35309',
                },
              }}
              variant="outlined"
            >
              ADD TO CART
            </Button>
          </Link>

          <Link to="">
            <Button
              className="one-product--added-btn"
              sx={
                toggleFavouriteBtn
                  ? {
                      backgroundColor: 'var(--orange-main)',
                      width: 220,
                      height: 36,
                      mr: '90px',
                      fontSize: '12px',
                      '&:hover': {
                        backgroundColor: '#c35309',
                      },
                    }
                  : {
                      width: 220,
                      height: 36,
                      mr: '90px',
                      fontSize: '12px',
                      color: 'var(--orange-main)',
                      borderColor: 'var(--orange-main)',
                      '&:hover': {
                        color: '#c35309',
                        borderColor: '#c35309',
                      },
                    }
              }
              fullWidth
              variant={toggleFavouriteBtn ? 'contained' : 'outlined'}
            >
              {toggleFavouriteBtn ? (
                <div>
                  <span>ADDED TO FAVOURITES</span>
                  <img
                    style={{ paddingLeft: '7px' }}
                    src={doneIcon}
                    alt="done icon"
                  />
                </div>
              ) : (
                'ADD TO FAVOURITES'
              )}
            </Button>
          </Link>
          <Link to="">
            <Button
              fullWidth
              sx={{
                backgroundColor: 'var(--orange-main)',
                width: 220,
                height: 36,
                fontSize: '12px',
                '&:hover': {
                  backgroundColor: '#c35309',
                },
              }}
              variant="contained"
            >
              BUY NOW
            </Button>
          </Link>
        </Stack>
      </div>
    </div>
  );
};
