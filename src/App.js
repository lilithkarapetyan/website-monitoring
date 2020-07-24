import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// routing
import Routes from './routes';

// header
import Header from './components/Header';

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
        <Routes />
      </div>
    </Router>
  );
}

export default App;
