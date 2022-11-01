import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { AddToFavoriteButton } from './AddToFavourite';
import { Notification } from './Notification';
import {
  addFavouriteApi,
  deleteFavouriteApi,
} from '../modules/user/addToFavourite';
import { useMakeRequest } from '../hooks/useMakeRequest';
import { OneProductInfoModal } from '../modules/product/OneProductInfoModal';

export const Item = ({ data }) => {
  const user = useSelector((state) => state.user.data);
  const navigate = useNavigate();
  const location = useLocation();
  const { request } = useMakeRequest();
  const [toggleLike, setToggleLike] = useState(data.favorite);
  const [openModal, setOpenModal] = useState(false);
  const [notificationProps, setNotificationProps] = useState({
    isOpen: false,
    type: 'success',
  });

  const toggleOpenModal = () => setOpenModal(!openModal);

  const toggleFavourite = async (productId) => {
    if (!user) {
      navigate('/home/add-to-favourite');
      return;
    }

    if (toggleLike) {
      const deleteFavourite = await request(deleteFavouriteApi, productId);
      setToggleLike(!deleteFavourite.success);
    } else {
      const addFavourite = await request(addFavouriteApi, productId);
      setToggleLike(addFavourite.success);
    }
  };

  const closeNotification = (alertClose) => {
    setNotificationProps((prevState) => ({
      ...prevState,
      isOpen: !alertClose,
    }));
  };

  const changeNotificationType = (bool) => {
    closeNotification(true);
    setTimeout(() => {
      setNotificationProps((prevState) => ({
        ...prevState,
        type: bool ? 'info' : 'success',
        isOpen: notificationProps.isOpen,
      }));
      closeNotification(false);
    }, 0);
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      navigate('/home/add-to-favourite');
      return;
    }

    if (location.pathname.includes('settings')) {
      toggleFavourite(data.id);
      return;
    }

    toggleFavourite(data.id);
    closeNotification(true);
    changeNotificationType(toggleLike);
  };

  useEffect(() => {
    setToggleLike(data.favorite);
  }, [data.favorite]);

  return (
    <div className="product">
      <div onClick={toggleOpenModal}>
        <div className="product--img-wrapper">
          <div>
            <img
              className="product--product-img"
              src={data.picture}
              alt="product"
            />
          </div>
          <div
            style={{
              position: 'absolute',
              top: '55%',
              left: '80%',
              color: 'white',
            }}
          >
            <AddToFavoriteButton
              favorite={toggleLike}
              handleClick={handleClick}
            />
          </div>
        </div>
        <div className="product-info-wrapper">
          <span className="product--caption w-100">{data.title}</span>
          <span className="product--price w-100">${data.price}</span>
        </div>
      </div>
      <OneProductInfoModal
        {...data}
        onFavorite={() => toggleFavourite(data.id)}
        onClose={toggleOpenModal}
        open={openModal}
        favorite={toggleLike}
      />
      <Notification
        closeNotification={closeNotification}
        isOpen={notificationProps.isOpen}
        notificationType={notificationProps.type}
        notificationTitle={data.title}
        isTitleOfProducts={true}
      />
    </div>
  );
};
