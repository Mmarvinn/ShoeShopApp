import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import deleteIcon from '../../images/delete-icon.svg';
import { addToCart, deleteFromCart } from './redux/cartSlice';

export const CartCard = ({
  id,
  picture,
  price,
  quantity,
  title,
  setAllQuantity,
  setTotalCost,
}) => {
  const dispatch = useDispatch();
  const [newQuantity, setNewQuantity] = useState(quantity);

  const increaseQuantity = () => {
    setNewQuantity((prevState) => prevState + 1);
    setAllQuantity((prevState) => prevState + 1);
    setTotalCost((prevState) => {
      return prevState + price;
    });
  };
  const decreaseQuantity = () => {
    setNewQuantity((prevState) => (prevState <= 1 ? 1 : prevState - 1));
    if (newQuantity !== 1) {
      setAllQuantity((prevState) => prevState - 1);
      setTotalCost((prevState) => {
        return prevState - price;
      });
    }
  };

  const deleteProduct = () => {
    setAllQuantity((prevState) => prevState - newQuantity);
    setTotalCost((prevState) => {
      return prevState - price * newQuantity;
    });
    dispatch(deleteFromCart(id));
  };

  useEffect(() => {
    dispatch(addToCart({ title, price, picture, id, quantity: newQuantity }));
  }, [newQuantity]);

  return (
    <div className="cart--card">
      <div className="card--img-wrapper">
        <img className="card--img" src={picture} alt="product" />
      </div>
      <div className="card--title-wrapper">
        <h4 className="card--title">{title}</h4>
        <div className="card--buttons-wrapper">
          <div onClick={deleteProduct} className="card--delete-icon-wrapper">
            <img src={deleteIcon} alt="delete icon" />
          </div>
          <div style={{ marginLeft: '20px' }}>
            <button
              className="one-product--inc-dec-btn"
              onClick={decreaseQuantity}
            >
              -
            </button>
            <span className="one-product-product-qty">{newQuantity}</span>
            <button
              className="one-product--inc-dec-btn"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="card--price-wrapper">
        <span style={{ width: '100%', paddingLeft: '40px', fontSize: '15px' }}>
          Price:
        </span>
        <span
          className="fw-500"
          style={{ width: '100%', paddingLeft: '40px', fontSize: '18px' }}
        >
          $ {price}
        </span>
      </div>
    </div>
  );
};
