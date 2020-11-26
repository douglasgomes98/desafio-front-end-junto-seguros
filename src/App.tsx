import '~/config/ReactotronConfig';
import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ConnectedRouter } from 'connected-react-router';
import GlobalStyle from '~/styles/global';
import Routes from '~/routes/index';
import { store, history, persistor } from '~/store/configureStore';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <PersistGate persistor={persistor}>
          <GlobalStyle />
          <Routes />
          <ToastContainer />
        </PersistGate>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
