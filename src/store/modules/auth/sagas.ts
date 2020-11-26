import { all, takeLatest, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';
import { signInSucess, signFailure } from './actions';
import { AuthActionTypes, Action } from './types';

export function* signInRequest(data: Action) {
  try {
    const { email, password } = data.payload;

    if (email === 'juntoseguros@mail.com' && password === 'mecontrataae') {
      yield put(
        signInSucess({
          id: 1,
          name: 'Junto Seguros',
          email: 'juntoseguros@mail.com',
        }),
      );

      yield put(push('/movies'));
    } else {
      throw new Error();
    }
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');

    yield put(signFailure());
  }
}

export function* signOut() {
  yield put(push('/'));
}

export default all([
  takeLatest(AuthActionTypes.SIGN_IN_REQUEST, signInRequest),
  takeLatest(AuthActionTypes.SIGN_OUT, signOut),
]);
