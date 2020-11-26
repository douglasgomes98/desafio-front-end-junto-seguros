import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  searchMoviesFailure,
  searchMoviesSucess,
  paginateCurrentSearchFailure,
  paginateCurrentSearchSucess,
  addMovieInListSucess,
} from './actions';
import {
  ActionSearchRequest,
  MoviesActionTypes,
  MovieState,
  ActionAddMovieInListRequest,
} from './types';
import api from '~/services/api';
import { ApplicationState } from '../../types';

export function* searcMoviesRequest(data: ActionSearchRequest) {
  try {
    const { payload } = data;

    if (payload.length < 3) {
      throw new Error();
    }

    const response = yield call(
      api.get,
      `?apikey=${process.env.REACT_APP_API_IMDB_TOKEN}&type=movie&s=${payload}`,
    );

    yield put(searchMoviesSucess(response.data.Search, payload));
  } catch (error) {
    toast.error('Falha ao buscar filmes, tente novamente.');

    yield put(searchMoviesFailure());
  }
}

export function* paginateCurrentSearchRequest() {
  const moviesStore: MovieState = yield select(
    (state: ApplicationState) => state.movies,
  );

  try {
    const { lastSearchParam, currentPage } = moviesStore;

    const nextcurrentPage = currentPage + 1;

    const response = yield call(
      api.get,
      `?apikey=${process.env.REACT_APP_API_IMDB_TOKEN}&type=movie&s=${lastSearchParam}&page=${nextcurrentPage}`,
    );

    const newMovies = [...moviesStore.currentSearch, ...response.data.Search];

    yield put(
      paginateCurrentSearchSucess({
        movies: newMovies,
        pageNumber: nextcurrentPage,
      }),
    );
  } catch (error) {
    toast.error('Falha ao buscar mais filmes, tente novamente.');

    yield put(paginateCurrentSearchFailure());
  }
}

export function* addMovieInListRequest(data: ActionAddMovieInListRequest) {
  const moviesStore: MovieState = yield select(
    (state: ApplicationState) => state.movies,
  );

  try {
    const newMovies = [...moviesStore.list, data.payload];

    yield put(addMovieInListSucess(newMovies));
    toast.success('Filme salvo na sua lista!');
  } catch (error) {
    toast.error('Esse filme já está salvo na sua lista.');
  }
}

export default all([
  takeLatest(MoviesActionTypes.SEARCH_MOVIES_REQUEST, searcMoviesRequest),
  takeLatest(
    MoviesActionTypes.PAGINATE_CURRENT_SEARCH_REQUEST,
    paginateCurrentSearchRequest,
  ),
  takeLatest(
    MoviesActionTypes.ADD_MOVIE_IN_LIST_REQUEST,
    addMovieInListRequest,
  ),
]);
