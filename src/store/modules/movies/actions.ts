import { action } from 'typesafe-actions';
import {
  MoviesActionTypes,
  SearchRequest,
  PaginateRequest,
  Movie,
  PaginateSucess,
} from './types';

export const searcMoviesRequest = (data: SearchRequest) =>
  action(MoviesActionTypes.SEARCH_MOVIES_REQUEST, data);

export const searchMoviesSucess = (data: Movie[]) =>
  action(MoviesActionTypes.SEARCH_MOVIES_SUCESS, data);

export const searchMoviesFailure = () =>
  action(MoviesActionTypes.SEARCH_MOVIES_FAILURE);

export const paginateCurrentSearchRequest = (data: PaginateRequest) =>
  action(MoviesActionTypes.PAGINATE_CURRENT_SEARCH_REQUEST, data);

export const paginateCurrentSearchSucess = (data: PaginateSucess) =>
  action(MoviesActionTypes.PAGINATE_CURRENT_SEARCH_SUCESS, data);

export const paginateCurrentSearchFailure = () =>
  action(MoviesActionTypes.PAGINATE_CURRENT_SEARCH_FAILURE);

export const addMovieInListRequest = (data: Movie) =>
  action(MoviesActionTypes.ADD_MOVIE_IN_LIST_REQUEST, data);

export const addMovieInListSucess = (data: Movie[]) =>
  action(MoviesActionTypes.ADD_MOVIE_IN_LIST_SUCESS, data);

export const removeMovieInListRequest = (data: Movie) =>
  action(MoviesActionTypes.REMOVE_MOVIE_IN_LIST_REQUEST, data);

export const removeMovieInListSucess = (data: Movie[]) =>
  action(MoviesActionTypes.REMOVE_MOVIE_IN_LIST_SUCESS, data);
