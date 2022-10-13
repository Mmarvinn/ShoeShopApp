import { AddToFavoriteButton } from './AddToFavourite';

export const Item = ({ data }) => {
  return (
    <div className="product">
      <div className="product--img-wrapper">
        <div>
          <img
            className="product--product-img"
            src={data.picture}
            alt="product picture"
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
          <AddToFavoriteButton />
        </div>
      </div>
      <div className="product-info-wrapper">
        <span className="product--caption w-100">{data.title}</span>
        <span className="product--price w-100">${data.price}</span>
      </div>
    </div>
  );
};
