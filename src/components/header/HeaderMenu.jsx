import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { logout } from '../../modules/user/redux/userSlice';

export function HeaderMenu({ userEmail, userFullName }) {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickSetting = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    setAnchorEl(null);
    dispatch(logout());
  };

  return (
    <div className="header-menu">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
        sx={{ minWidth: '0px' }}
      >
        <KeyboardArrowDownIcon />
      </Button>
      <Menu
        sx={{ top: '7px' }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 17,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem
          className="header-menu-item-wrapper"
          divider={true}
          onClick={handleClose}
        >
          <span className="w-100">{userFullName}</span>
          <span className="header-menu-item-email w-100">{userEmail}</span>
        </MenuItem>
        <Link to="/settings/edit" style={{ color: 'black' }}>
          <MenuItem onClick={handleClickSetting}>Settings</MenuItem>
        </Link>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
