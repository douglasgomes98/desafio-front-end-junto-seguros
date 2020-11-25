import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '~/pages/Login';
import Dashboard from '~/pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
