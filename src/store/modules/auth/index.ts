import produce from 'immer';
import { Reducer } from 'redux';
import { AuthState, AuthActionTypes } from './types';

const INITAL_STATE: AuthState = {
  user: null,
  loading: false,
  signed: false,
};

const reducer: Reducer<AuthState> = (state = INITAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case AuthActionTypes.SIGN_IN_REQUEST:
        draft.loading = false;
        break;
      case AuthActionTypes.SIGN_IN_SUCCESS:
        draft.user = action.payload;
        draft.signed = true;
        draft.loading = false;
        break;
      case AuthActionTypes.SIGN_FAILURE:
        draft.loading = false;
        break;
      case AuthActionTypes.SIGN_OUT:
        draft.user = null;
        draft.signed = false;
        break;
      default:
        return state;
    }
  });
};

export default reducer;
