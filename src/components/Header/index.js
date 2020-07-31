import React, { useCallback, useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames/bind';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import styles from './Header.module.css';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const cx = classNames.bind(styles);

const navList = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'Dashboard',
    href: '/dashboard',
  },
  {
    text: 'Logout',
    href: '/login',
  },
];

export default function Header() {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false,
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // eslint-disable-next-line
  const isLoggedIn = useMemo(() => sessionStorage.getItem('isLogged'), [sessionStorage.getItem('isLogged')]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { push } = useHistory();

  // eslint-disable-next-line
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleNavigate = useCallback((to) => {
    if (to === '/login') {
      console.log('pressed');
      sessionStorage.setItem('isLogged', false);
      sessionStorage.removeItem('user');
    }
    push(to);
  }, [push]);

  const handleOpenAnalytics = useCallback(() => {
    setAnchorEl(null);
    push('/dashboard');
  }, [push]);

  const list = (anchor) => (
    <div
      className={cx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navList.map(({ text, href }) => (
          <ListItem button key={text}>
            <ListItemText primary={text} onClick={() => handleNavigate(href)} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          {isLoggedIn === 'true' ? ['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <MenuIcon onClick={toggleDrawer(anchor, true)} />
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          )) : null}
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Web Monitoring
        </Typography>
        {isLoggedIn === 'true' ? (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleOpenAnalytics}>My Analytics</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}
