import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Reducer } from 'redux';

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer(
    {
      key: '@juntoseguros',
      storage,
      whitelist: ['auth'],
    },
    reducers,
  );

  return persistedReducer;
};
