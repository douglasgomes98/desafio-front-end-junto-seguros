import { action } from 'typesafe-actions';
import { AuthActionTypes, Auth, User } from './types';

export const signInRequest = (data: Auth) =>
  action(AuthActionTypes.SIGN_IN_REQUEST, { data });

export const signInSucess = (data: User) =>
  action(AuthActionTypes.SIGN_IN_SUCCESS, { user: data });

export const signFailure = () => action(AuthActionTypes.SIGN_FAILURE);

export const signOut = () => action(AuthActionTypes.SIGN_OUT);
