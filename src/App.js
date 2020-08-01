import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import classnames from 'classnames/bind';
import LoginCtx from './contexts/LoginContext';

// styles
import styles from './App.module.scss';

// routing
import Routes from './routes';

// components
import Header from './components/Header';
import Footer from './components/Footer';

const cx = classnames.bind(styles);

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () => createMuiTheme({
      palette: {
        type: prefersDarkMode ? 'dark' : 'light',
      },
    }),
    [prefersDarkMode],
  );

  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('isLogged')) {
      sessionStorage.setItem('isLogged', 'false');
    }
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <div className={cx('content')}>
            <LoginCtx.Provider value={{ login, setLogin }}>
              <Header />
              <Routes />
            </LoginCtx.Provider>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
