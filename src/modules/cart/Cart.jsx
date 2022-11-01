import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CartCard } from './CartCard';
import { CartShippingInfo } from './CartShippingInfo';
import { useMakeRequest } from '../../hooks/useMakeRequest';
import { createOrderApi } from './createOrder';
import { clearStore } from './redux/cartSlice';
import { CartModal } from './CartModal';

export const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => Object.values(state.cart));
  const { request, loading, error } = useMakeRequest();
  const [values, setValues] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [allQuantity, setAllQuantity] = useState(
    cartProducts.reduce((sum, el) => sum + el.quantity, 0)
  );
  const [totalCost, setTotalCost] = useState(
    cartProducts.reduce((sum, el) => sum + el.price * el.quantity, 0)
  );

  const toggleOpenModal = () => setOpenModal(!openModal);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const itemsForRequest = cartProducts.map((el) => {
      return { productId: el.id, quantity: el.quantity };
    });

    const data = {
      items: itemsForRequest,
      shipment: {
        fullName: values.fullName,
        phone: values.phone,
        country: values.country,
        city: values.city,
        address: values.address,
      },
    };

    const cartOrder = await request(createOrderApi, data);

    // cartOrder.status === 401(Unauthorized) need if some user not registered but he want to buy something on our website,
    // and we get some data from him, and after get order from him
    if (cartOrder.ok || cartOrder.status === 401) {
      dispatch(clearStore());
    }

    toggleOpenModal();
  };

  return (
    <div style={{ backgroundColor: 'white', height: '785px', width: '970px' }}>
      <div className="cart-wrapper">
        <div>
          <h2 style={{ padding: '60px 0px 35px 0', textAlign: 'left' }}>
            My Cart
          </h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div
            className="cart--carts-wrapper"
            style={cartProducts.length >= 4 ? { overflowY: 'scroll' } : {}}
          >
            {cartProducts.length !== 0 ? (
              cartProducts.map((product) => (
                <CartCard
                  key={product.id}
                  {...product}
                  setAllQuantity={setAllQuantity}
                  setTotalCost={setTotalCost}
                />
              ))
            ) : (
              <h2 style={{ padding: '235px 0 0 50px' }}>
                You have not added any items to the cart yet
              </h2>
            )}
          </div>
          <div className="cart--shipping-info-wrapper">
            <CartShippingInfo
              handleSubmit={handleSubmit}
              allQuantity={allQuantity}
              totalCost={totalCost}
              values={values}
              setValues={setValues}
            />
          </div>
        </div>
      </div>
      <CartModal
        toggleOpenModal={toggleOpenModal}
        openModal={openModal}
        onClose={toggleOpenModal}
      />
    </div>
  );
};
