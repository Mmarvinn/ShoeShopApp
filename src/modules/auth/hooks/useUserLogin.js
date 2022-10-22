import { useEffect, useState } from 'react';
import { getJwtToken } from '../../../services/localStorage';
import { getAccount } from '../../user/getAccount';

// use this hook only in the root of app

export const useUserLogin = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const fetchedData = await getAccount();
      setUser(fetchedData);
    };
    if (getJwtToken()) {
      getUser();
    }
  }, []);

  return [user, setUser];
};
