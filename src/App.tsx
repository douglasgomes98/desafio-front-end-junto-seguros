import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from '~/styles/global';
import Routes from '~/routes/index';
import history from '~/services/history';

import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
        <ToastContainer />
      </Router>
    </Provider>
  );
};

export default App;
