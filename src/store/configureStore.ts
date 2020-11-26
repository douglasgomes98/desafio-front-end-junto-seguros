/* eslint-disable no-console */
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import persistReducers from './persistReducers';

import createRootReducer from './modules/rootReducer';
import createRootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const routeMiddleware = createRouterMiddleware(history);

const middlewares = [sagaMiddleware, routeMiddleware];

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

export const store = createStore(
  persistReducers(createRootReducer(history)),
  enhancer,
);

export const persistor = persistStore(store);

sagaMiddleware.run(createRootSaga);
