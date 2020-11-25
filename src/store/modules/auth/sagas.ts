import { all, takeLatest, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import history from '~/services/history';
import { signInSucess, signFailure } from './actions';
import { Auth, AuthActionTypes } from './types';

interface Action extends AnyAction {
  payload: Auth;
}

export function* signIn({ payload }: Action) {
  try {
    const { email, password } = payload;

    if (email === 'juntoseguros@mail.com' && password === 'mecontrataae') {
      yield put(
        signInSucess({
          id: 1,
          name: 'Junto Seguros',
          email: 'juntoseguros@mail.com',
        }),
      );

      history.push('/dashboard');
    } else {
      throw new Error();
    }
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');

    yield put(signFailure());
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest(AuthActionTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthActionTypes.SIGN_OUT, signOut),
]);
