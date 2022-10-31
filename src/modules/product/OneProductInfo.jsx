import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import closeIcon from '../../images/close-icon.svg';
import doneIcon from '../../images/done-icon.svg';
import { addToCart } from '../cart/redux/cartSlice';

export const OneProductInfo = ({
  onClose,
  title,
  description,
  price,
  picture,
  favorite,
  onFavorite,
  id,
}) => {
  const navigate = useNavigate();
  const productFromCart = useSelector((state) => state.cart[id]);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(productFromCart?.quantity || 1);
  const isAddedToCart = productFromCart?.quantity !== quantity;

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((prevState) => (prevState <= 1 ? 1 : prevState - 1));
  };

  const onAddToCart = () => {
    dispatch(addToCart({ title, price, picture, id, quantity: quantity }));
  };

  const onBuy = () => {
    onAddToCart();
    navigate('/cart');
  };

  return (
    <div className="one-product-wrapper">
      <button onClick={onClose} className="one-product--close-btn">
        <img src={closeIcon} alt="close icon" />
      </button>
      <div className="one-product--content-wrapper">
        <div className="one-product--img-wrapper">
          <img className="one-product-img" src={picture} alt="product" />
        </div>
        <div className="one-product--description-wrapper">
          <h3 className="one-product--title">{title}</h3>
          <p className="one-product--description">{description || ''}</p>
          <div className="w-100">
            <span className="fw-700">PRICE</span>
            <span
              className="fw-700"
              style={{ marginLeft: '170px', fontSize: '18px' }}
            >
              ${price}
            </span>
          </div>
          <div className="w-100">
            <button
              className="one-product--inc-dec-btn"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="one-product-product-qty">{quantity}</span>
            <button
              className="one-product--inc-dec-btn"
              onClick={increaseQuantity}
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
              {quantity}
            </span>
          </div>
          <div className="w-100">
            <span>Total:</span>
            <span
              className="fw-700"
              style={{ marginLeft: '25px', fontSize: '18px' }}
            >
              ${quantity * price}
            </span>
          </div>
        </div>
      </div>
      <div className="one-product--buttons-wrapper">
        <Stack spacing={3} direction="row">
          <div>
            <Button
              onClick={onAddToCart}
              fullWidth
              sx={
                isAddedToCart
                  ? {
                      width: 220,
                      height: 36,
                      fontSize: '12px',
                      color: 'var(--orange-main)',
                      borderColor: 'var(--orange-main)',
                      '&:hover': {
                        color: '#c35309',
                        borderColor: '#c35309',
                      },
                    }
                  : {
                      backgroundColor: 'var(--orange-main)',
                      width: 220,
                      height: 36,
                      fontSize: '12px',
                      '&:hover': {
                        backgroundColor: '#c35309',
                      },
                    }
              }
              variant={isAddedToCart ? 'outlined' : 'contained'}
            >
              {isAddedToCart ? (
                'ADD TO CART'
              ) : (
                <div>
                  <span>ADDED TO CART</span>
                  <img
                    style={{ paddingLeft: '7px' }}
                    src={doneIcon}
                    alt="done icon"
                  />
                </div>
              )}
            </Button>
          </div>
          <div>
            <Button
              className="one-product--added-btn"
              onClick={onFavorite}
              sx={
                favorite
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
              variant={favorite ? 'contained' : 'outlined'}
            >
              {favorite ? (
                <div>
                  <span>ADDED TO FAVORITES</span>
                  <img
                    style={{ paddingLeft: '7px' }}
                    src={doneIcon}
                    alt="done icon"
                  />
                </div>
              ) : (
                'ADD TO FAVORITES'
              )}
            </Button>
          </div>
          <Button
            onClick={onBuy}
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
        </Stack>
      </div>
    </div>
  );
};
