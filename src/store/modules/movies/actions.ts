import { action } from 'typesafe-actions';
import {
  MoviesActionTypes,
  Movie,
  PaginateSucess,
  MovieDetails,
} from './types';

export const searcMoviesRequest = (data: string) =>
  action(MoviesActionTypes.SEARCH_MOVIES_REQUEST, data);

export const searchMoviesSucess = (data: Movie[], param: string) =>
  action(MoviesActionTypes.SEARCH_MOVIES_SUCESS, { movies: data, param });

export const searchMoviesFailure = () =>
  action(MoviesActionTypes.SEARCH_MOVIES_FAILURE);

export const paginateCurrentSearchRequest = () =>
  action(MoviesActionTypes.PAGINATE_CURRENT_SEARCH_REQUEST);

export const paginateCurrentSearchSucess = (data: PaginateSucess) =>
  action(MoviesActionTypes.PAGINATE_CURRENT_SEARCH_SUCESS, data);

export const paginateCurrentSearchFailure = () =>
  action(MoviesActionTypes.PAGINATE_CURRENT_SEARCH_FAILURE);

export const addMovieInListRequest = (data: Movie) =>
  action(MoviesActionTypes.ADD_MOVIE_IN_LIST_REQUEST, data);

export const addMovieInListSucess = (data: Movie[]) =>
  action(MoviesActionTypes.ADD_MOVIE_IN_LIST_SUCESS, { movies: data });

export const removeMovieInListRequest = (data: Movie) =>
  action(MoviesActionTypes.REMOVE_MOVIE_IN_LIST_REQUEST, data);

export const removeMovieInListSucess = (data: Movie[]) =>
  action(MoviesActionTypes.REMOVE_MOVIE_IN_LIST_SUCESS, { movies: data });

export const showDetailsMovieRequest = (data: Movie) =>
  action(MoviesActionTypes.SHOW_DETAILS_MOVIE_REQUEST, data);

export const showDetailsMovieSucess = (data: MovieDetails) =>
  action(MoviesActionTypes.SHOW_DETAILS_MOVIE_SUCESS, data);

export const showDetailsMovieFailure = () =>
  action(MoviesActionTypes.SHOW_DETAILS_MOVIE_FAILURE);
