import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../modules/user/redux/userSlice';

export function HeaderMenu({ userEmail, userFullName }) {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
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
        sx={{ top: '10px' }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
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
        <Link to="/settings" style={{ color: 'black' }}>
          <MenuItem onClick={handleClickSetting}>Settings</MenuItem>
        </Link>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
