import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { searchMoviesFailure, searchMoviesSucess } from './actions';
import { ActionSearchRequest, MoviesActionTypes } from './types';
import api from '~/services/api';

export function* searcMoviesRequest(data: ActionSearchRequest) {
  try {
    const { name } = data.payload;

    const response = yield call(
      api.get,
      `?apikey=${process.env.REACT_APP_API_IMDB_TOKEN}type=movie&s=${name}`,
    );

    yield put(searchMoviesSucess(response.data.Search));
  } catch (error) {
    toast.error('Falha ao buscar filmes, tente novamente.');

    yield put(searchMoviesFailure());
  }
}

export default all([
  takeLatest(MoviesActionTypes.SEARCH_MOVIES_REQUEST, searcMoviesRequest),
]);
