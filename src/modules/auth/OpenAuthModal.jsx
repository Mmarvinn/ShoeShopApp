import { Link, useNavigate } from 'react-router-dom';

export const OpenAuthModal = ({ buttonName, pathname }) => {
  const navigate = useNavigate();

  // const handleOpenModal = () => {
  //   navigate(pathname);
  // };

  return (
    <div>
      <Link className="header--a" to={pathname}>
        {buttonName}
      </Link>
    </div>
  );
};
