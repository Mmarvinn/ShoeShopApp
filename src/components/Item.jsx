import { AddToFavoriteButton } from './AddToFavourite';
import { useEffect, useState } from 'react';
import { favouriteApi } from '../modules/user/addToFavourite';
import { useMakeRequest } from '../hooks/useMakeRequest';

export const Item = ({ data }) => {
  const { request, error, loading } = useMakeRequest();
  const [toggleLike, setToggleLike] = useState(data.favorite);

  const isFavourite = async (productId) => {
    if (toggleLike) {
      const deleteFavourite = await request(favouriteApi, productId, 'DELETE');
      setToggleLike(!deleteFavourite.success);
    } else {
      const addFavourite = await request(favouriteApi, productId, 'POST');
      setToggleLike(addFavourite.success);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    isFavourite(data.id);
  };

  useEffect(() => {
    setToggleLike(data.favorite);
  }, [data.favorite]);

  return (
    <div className="product">
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
            favourite={toggleLike}
            handleClick={handleClick}
          />
        </div>
      </div>
      <div className="product-info-wrapper">
        <span className="product--caption w-100">{data.title}</span>
        <span className="product--price w-100">${data.price}</span>
      </div>
    </div>
  );
};
