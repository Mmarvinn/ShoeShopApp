import logo from '../../images/apiko.svg';
import { Link } from 'react-router-dom';

export const HeaderLogo = () => {
  return (
    <Link to="/home">
      <img src={logo} alt="apiko logo" />
    </Link>
  );
};
