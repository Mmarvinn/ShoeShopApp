import { useState } from 'react';
import closeIcon from '../../images/close-icon.svg';
import doneIcon from '../../images/done-icon.svg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export const OneProductInfo = ({
  onClose,
  title,
  description,
  price,
  picture,
  favorite,
  onFavorite,
}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((prevState) => (prevState <= 1 ? 1 : prevState - 1));
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
