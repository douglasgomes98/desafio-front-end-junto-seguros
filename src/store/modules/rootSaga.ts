import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* createRootSaga() {
  return yield all([auth]);
}
