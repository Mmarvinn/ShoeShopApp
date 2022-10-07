import { AddToFavoriteButton } from './AddToFavourite';

export const Item = ({ data }) => {
  return (
    <div className="product">
      <div>
        <div>
          <img
            className="product-img"
            src={data.picture}
            alt="product picture"
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: '60%',
            left: '80%',
            color: 'white',
          }}
        >
          <AddToFavoriteButton />
        </div>
      </div>
      <div className="product-info-wrapper">
        <span className="w-100">{data.title}</span>
        <span className="w-100">${data.price}</span>
      </div>
    </div>
  );
};
