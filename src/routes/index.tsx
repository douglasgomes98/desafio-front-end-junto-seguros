import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '~/pages/Login';
import Dashboard from '~/pages/Dashboard';
import Movies from '~/pages/Movies';
import Series from '~/pages/Series';
import MyList from '~/pages/MyList';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/movies" component={Movies} isPrivate />
      <Route path="/series" component={Series} isPrivate />
      <Route path="/my_list" component={MyList} isPrivate />
    </Switch>
  );
};

export default Routes;
