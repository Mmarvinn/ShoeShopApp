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

export const UserSettings = () => {
  const [tabMenu, setTabMenu] = useState('editAccount');
  const userName = useSelector((state) => state.user.data?.fullName || '');

  const changeTabMenu = (event, newValue) => {
    setTabMenu(newValue);
  };

  const tabStyle = {
    padding: '0',
  };

  const whenChooseTabProps = {
    backgroundColor: 'var(--orange-main)',
    textColor: 'white',
    isEnableBottomArrow: true,
  };

  const whenDontChooseTabProps = {
    backgroundColor: 'white',
    textColor: 'black',
    isEnableBottomArrow: false,
  };

  // when selected

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
              icon={<TabMenuLink text="Edit Account" selected={Boolean} />}
            />
            <Tab
              value="ordersHistory"
              disableRipple
              style={tabStyle}
              icon={
                <TabMenuLink text="coming soon..." {...whenChooseTabProps} />
              }
            />
            <Tab
              value="favourites"
              disableRipple
              style={tabStyle}
              icon={
                <TabMenuLink
                  text="coming soon..."
                  {...whenDontChooseTabProps}
                />
              }
            />
          </Tabs>
        </Box>
      </div>
      {tabMenu === 'editAccount' && <UserEditInfo />}
      {tabMenu === 'ordersHistory' && <UserOrdersHistory />}
      {tabMenu === 'favourites' && <UserFavourites />}
    </div>
  );
};
