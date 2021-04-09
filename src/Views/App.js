import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Box } from '@material-ui/core';
import Routes from './Routes';
import './App.css';

function App() {
  const browserHistory = createBrowserHistory();

  return (
    <Box height='100vh'>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </Box>
  );
}

export default App;
