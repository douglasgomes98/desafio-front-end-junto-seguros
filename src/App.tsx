import '~/config/ReactotronConfig';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import GlobalStyle from '~/styles/global';
import Routes from '~/routes/index';
import history from '~/services/history';
import { store, persistor } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <Routes />
          <ToastContainer />
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
