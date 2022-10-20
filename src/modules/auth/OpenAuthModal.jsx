import { Link } from 'react-router-dom';

export const OpenAuthModal = ({ buttonName, pathname }) => {
  return (
    <div>
      <Link className="header--a" to={pathname}>
        {buttonName}
      </Link>
    </div>
  );
};
