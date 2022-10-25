import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ClientAvatar } from '../../components/header/ClientAvatar';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { UserEditAccount } from './UserEditAccount';
import { UserOrdersHistory } from './UserOrdersHistory';
import { UserFavourites } from './UserFavourites';

const tabStyle = {
  border: '1px solid #DEDEE0',
  backgroundColor: 'var(--orange-main)',
  color: 'black',
  textTransform: 'none',
};

export const UserSettings = () => {
  const [tabMenu, setTabMenu] = useState('editAccount');
  const userName = useSelector((state) => state.user.data.fullName);

  const changeTabMenu = (event, newValue) => {
    setTabMenu(newValue);
  };

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
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Tabs value={tabMenu} onChange={changeTabMenu} centered>
            <Tab value="editAccount" style={tabStyle} label="Edit Account" />
            <Tab
              value="ordersHistory"
              style={tabStyle}
              label="Orders History"
            />
            <Tab value="favourites" style={tabStyle} label="Favourites" />
          </Tabs>
        </Box>
      </div>
      {tabMenu === 'editAccount' && <UserEditAccount />}
      {tabMenu === 'ordersHistory' && <UserOrdersHistory />}
      {tabMenu === 'favourites' && <UserFavourites />}
    </div>
  );
};
