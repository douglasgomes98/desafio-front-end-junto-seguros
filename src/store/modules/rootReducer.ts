import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import auth from './auth';
import movies from './movies';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    movies,
  });

export default createRootReducer;
