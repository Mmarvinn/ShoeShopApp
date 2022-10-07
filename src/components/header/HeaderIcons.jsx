import { CustomizedBadges } from './Basket';
import { FavoriteBasket } from './Favourite';

export const HeaderIcons = () => {
  return (
    <div className="header-favourite-and-basket">
      <FavoriteBasket />
      <CustomizedBadges />
    </div>
  );
};
