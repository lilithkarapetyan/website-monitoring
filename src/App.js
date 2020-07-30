import React, { useEffect, useMemo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import classnames from 'classnames/bind';

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

  useEffect(() => {
    if (!localStorage.getItem('isLogged')) {
      localStorage.setItem('isLogged', 'false');
    }
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <div className={cx('content')}>
            <Routes />
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
