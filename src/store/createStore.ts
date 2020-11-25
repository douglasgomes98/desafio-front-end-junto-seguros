/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { createStore, compose, applyMiddleware, Reducer } from 'redux';

export default (reducers: Reducer, middlewares: any) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
