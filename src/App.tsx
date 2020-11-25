import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from '~/styles/global';
import Routes from '~/routes/index';
import '~/config/ReactotronConfig';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <ToastContainer />
    </>
  );
};

export default App;
