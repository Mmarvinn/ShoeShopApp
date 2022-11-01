import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getJwtToken } from '../services/localStorage';

export const RedirectRoute = ({ children }) => {
  const user = useSelector((state) => state.user.data);
  const token = getJwtToken();

  if (user && token) {
    return null;
  }
  if (!user && token) {
    return null;
  }

  return <>{children}</>;
};
