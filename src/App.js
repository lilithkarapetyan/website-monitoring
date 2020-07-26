import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// routing
import classnames from 'classnames/bind';
import Routes from './routes';

// UGLY: Should I have craeted a style for App
// UGLY: If yes, should I have to do it like this?
// styles

import styles from './App.module.scss';

// components
import Header from './components/Header';
import Footer from './components/Footer';

const cx = classnames.bind(styles);

function App() {
  useEffect(() => {
    if (!sessionStorage.getItem('isLogged')) {
      sessionStorage.setItem('isLogged', false);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className={cx('content')}>
          <Routes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
