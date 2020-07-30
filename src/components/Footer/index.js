import React from 'react';
import { Typography } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import classnames from 'classnames/bind';

// styles
import styles from './Footer.module.scss';

const cx = classnames.bind(styles);

const Footer = () => (
  <footer className={cx('footer')}>
    <Typography variant="h6" component="h4">
      <span className={cx('text')}>
        Made with
        <FavoriteBorderIcon className={cx('icons')} />
        from &quot;Web Growth Team&quot;
      </span>
    </Typography>
  </footer>
);

export default Footer;
