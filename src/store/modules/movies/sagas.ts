import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  searchMoviesFailure,
  searchMoviesSucess,
  paginateCurrentSearchFailure,
  paginateCurrentSearchSucess,
  addMovieInListSucess,
  removeMovieInListSucess,
  showDetailsMovieSucess,
  showDetailsMovieFailure,
} from './actions';
import {
  ActionSearchRequest,
  MoviesActionTypes,
  MovieState,
  ActionAddMovieInListRequest,
  ActionRemoveMovieInListRequest,
  ActionShowDetailsMovieRequest,
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
    toast.error('Não foi possível salvar o filme na sua lista.');
  }
}

export function* removeMovieInListRequest(
  data: ActionRemoveMovieInListRequest,
) {
  const moviesStore: MovieState = yield select(
    (state: ApplicationState) => state.movies,
  );

  try {
    const newMovies = moviesStore.list.filter(
      (movie) => movie.imdbID !== data.payload.imdbID,
    );

    yield put(removeMovieInListSucess(newMovies));
    toast.success('Filme removido da sua lista!');
  } catch (error) {
    toast.error('Não foi possível remover o filme da sua lista.');
  }
}

export function* showDetailsMovieRequest(data: ActionShowDetailsMovieRequest) {
  try {
    const response = yield call(
      api.get,
      `?apikey=${process.env.REACT_APP_API_IMDB_TOKEN}&i=${data.payload.imdbID}`,
    );

    yield put(showDetailsMovieSucess(response.data));
  } catch (error) {
    yield put(showDetailsMovieFailure());
    toast.error('Não foi possível encontrar o detalhes do filme.');
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
  takeLatest(
    MoviesActionTypes.REMOVE_MOVIE_IN_LIST_REQUEST,
    removeMovieInListRequest,
  ),
  takeLatest(
    MoviesActionTypes.SHOW_DETAILS_MOVIE_REQUEST,
    showDetailsMovieRequest,
  ),
]);
