import { Link } from 'react-router-dom';

import logo from '../../images/apiko.svg';

export const HeaderLogo = () => {
  return (
    <Link to="/home">
      <img src={logo} alt="apiko logo" />
    </Link>
  );
};
