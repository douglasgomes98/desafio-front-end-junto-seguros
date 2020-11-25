/* eslint-disable no-console */
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import createStore from './createStore';
import persistReducers from './persistReducers';
import { AuthState } from './modules/auth/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface ApplicationState {
  auth: AuthState;
}

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middleware);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
