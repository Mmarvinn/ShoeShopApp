import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';

import { ClientAvatar } from '../../components/header/ClientAvatar';
import { UserOrdersHistory } from './UserOrdersHistory';
import { UserFavourites } from './UserFavourites';
import { UserEditInfo } from './UserEditInfo';
import { TabMenuLink } from '../../components/TabMenuLink';

export const UserSettings = () => {
  const location = useLocation();
  const userName = useSelector((state) => state.user.data?.fullName || '');

  return (
    <div className="user-settings">
      <div className="user-settings--head">
        <div>
          <ClientAvatar
            clientFullName={userName}
            bgcolor="#DEDEE0"
            styleForAvatar={{ width: '88px', height: '88px' }}
          />
        </div>
        <span className="w-100" style={{ fontSize: '22px', padding: '15px 0' }}>
          {userName}
        </span>
      </div>
      <div className="user-settings--nav">
        <Box
          sx={{ width: '100%', bgcolor: 'background.paper', display: 'flex' }}
        >
          <TabMenuLink
            path="/settings/edit"
            text="Edit Account"
            selected={location.pathname === '/settings/edit'}
          />
          <TabMenuLink
            path="/settings/orders"
            text="Orders History"
            selected={location.pathname === '/settings/orders'}
          />
          <TabMenuLink
            path="/settings/favourites"
            text="Favourites"
            selected={location.pathname === '/settings/favourites'}
          />
        </Box>
      </div>
      <Routes>
        <Route index element={<Navigate to="/settings/edit" replace />} />
        <Route path="/edit" element={<UserEditInfo />} />
        <Route path="/orders" element={<UserOrdersHistory />} />
        <Route path="/favourites" element={<UserFavourites />} />
      </Routes>
    </div>
  );
};
