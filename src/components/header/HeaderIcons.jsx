import { CartIcon } from './CartIcon';
import { FavoriteBasket } from './Favourite';

export const HeaderIcons = () => {
  return (
    <div className="header-favourite-and-basket">
      <FavoriteBasket />
      <CartIcon />
    </div>
  );
};
