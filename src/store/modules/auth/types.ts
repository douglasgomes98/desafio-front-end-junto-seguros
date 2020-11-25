/**
 * Action types
 */
export enum AuthActionTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_FAILURE = '@auth/SIGN_FAILURE',
  SIGN_OUT = '@auth/SIGN_OUT',
}

/**
 * Data types
 */
export interface Auth {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

/**
 * State type
 */
export interface AuthState {
  readonly user: User | null;
  readonly signed: boolean;
  readonly loading: boolean;
}
