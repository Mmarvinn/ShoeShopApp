import { AddToFavoriteButton } from './AddToFavourite';
import { useEffect, useState } from 'react';
import {
  addFavouriteApi,
  deleteFavouriteApi,
} from '../modules/user/addToFavourite';
import { useMakeRequest } from '../hooks/useMakeRequest';
import { useLocation } from 'react-router-dom';
import { OneProductInfoModal } from '../modules/product/OneProductInfoModal';

export const Item = ({
  data,
  handleCloseAlert,
  changeAlertType,
  changeAlertProductName,
}) => {
  const location = useLocation();
  const { request } = useMakeRequest();
  const [toggleLike, setToggleLike] = useState(data.favorite);
  const [openModal, setOpenModal] = useState(false);

  const toggleOpenModal = () => setOpenModal(!openModal);

  const toggleFavourite = async (productId) => {
    if (toggleLike) {
      const deleteFavourite = await request(deleteFavouriteApi, productId);
      setToggleLike(!deleteFavourite.success);
    } else {
      const addFavourite = await request(addFavouriteApi, productId);
      setToggleLike(addFavourite.success);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (location.pathname.includes('settings')) {
      toggleFavourite(data.id);
      return;
    }
    toggleFavourite(data.id);
    handleCloseAlert(true);
    changeAlertType(toggleLike);
    changeAlertProductName(data.title);
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
      {/* TODO: Works with routing as SignIn and Sign Out */}
      <OneProductInfoModal
        {...data}
        onFavorite={() => toggleFavourite(data.id)}
        onClose={toggleOpenModal}
        open={openModal}
        favorite={toggleLike}
      />
    </div>
  );
};
