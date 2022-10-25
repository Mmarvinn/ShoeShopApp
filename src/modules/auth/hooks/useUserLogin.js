import { useEffect } from 'react';
import { getJwtToken } from '../../../services/localStorage';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../user/redux/userSlice';

// use this hook only in the root of app

export const useUserLogin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getJwtToken()) {
      dispatch(fetchUser());
    }
  }, [dispatch]);
};
