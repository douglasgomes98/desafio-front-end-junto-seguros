import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import auth from './auth';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth,
  });

export default createRootReducer;
