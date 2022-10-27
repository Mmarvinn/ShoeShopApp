import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ClientAvatar } from '../../components/header/ClientAvatar';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { UserOrdersHistory } from './UserOrdersHistory';
import { UserFavourites } from './UserFavourites';
import { UserEditInfo } from './UserEditInfo';
import { TabMenuLink } from '../../components/TabMenuLink';
import { Routes, Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const UserSettings = () => {
  const location = useLocation();
  const [tabMenu, setTabMenu] = useState('editAccount');
  const userName = useSelector((state) => state.user.data?.fullName || '');

  const changeTabMenu = (event, newValue) => {
    setTabMenu(newValue);
  };

  const tabStyle = {
    padding: '0',
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
          <Tabs
            value={tabMenu}
            indicatorColor="none"
            onChange={changeTabMenu}
            centered
          >
            <Tab
              value="editAccount"
              disableRipple
              style={tabStyle}
              icon={
                <Link to="/settings/edit">
                  <TabMenuLink
                    text="Edit Account"
                    selected={
                      location.pathname === '/settings/edit' ? true : false
                    }
                  />
                </Link>
              }
            />
            <Tab
              value="ordersHistory"
              disableRipple
              style={tabStyle}
              icon={
                <Link to="/settings/orders">
                  <TabMenuLink
                    text="coming soon..."
                    selected={
                      location.pathname === '/settings/orders' ? true : false
                    }
                  />
                </Link>
              }
            />
            <Tab
              value="favourites"
              disableRipple
              style={tabStyle}
              icon={
                <Link to="/settings/favourites">
                  <TabMenuLink
                    text="Favourites"
                    selected={
                      location.pathname === '/settings/favourites'
                        ? true
                        : false
                    }
                  />
                </Link>
              }
            />
          </Tabs>
        </Box>
      </div>
      {location.pathname === '/settings/edit' && <UserEditInfo />}
      {location.pathname === '/settings/orders' && <UserOrdersHistory />}
      {location.pathname === '/settings/favourites' && <UserFavourites />}
    </div>
  );
};
