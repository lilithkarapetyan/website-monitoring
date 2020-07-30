import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';

// styles
import classnames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classnames.bind(styles);

const Footer = () => (
  // UGLY: Should I use the footer tag for styles?
  <footer className={cx('footer')}>
    <span className={cx('text')}>
      Made with
      <FavoriteBorderIcon className={cx('icons')} />
      from &quot;Web Growth Team&quot;
      <SentimentSatisfiedOutlinedIcon className={cx('icons')} />
    </span>
  </footer>
);

export default Footer;
