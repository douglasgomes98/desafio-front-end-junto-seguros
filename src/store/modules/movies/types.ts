import { AnyAction } from 'redux';

/**
 * Action types
 */
export enum MoviesActionTypes {
  SEARCH_MOVIES_REQUEST = '@movies/SEARCH_MOVIES_REQUEST',
  SEARCH_MOVIES_SUCESS = '@movies/SEARCH_MOVIES_SUCESS',
  SEARCH_MOVIES_FAILURE = '@movies/SEARCH_MOVIES_FAILURE',
  PAGINATE_CURRENT_SEARCH_REQUEST = '@movies/PAGINATE_CURRENT_SEARCH_REQUEST',
  PAGINATE_CURRENT_SEARCH_SUCESS = '@movies/PAGINATE_CURRENT_SEARCH_SUCESS',
  PAGINATE_CURRENT_SEARCH_FAILURE = '@movies/PAGINATE_CURRENT_SEARCH_FAILURE',
  ADD_MOVIE_IN_LIST_REQUEST = '@movies/ADD_MOVIE_IN_LIST_REQUEST',
  ADD_MOVIE_IN_LIST_SUCESS = '@movies/ADD_MOVIE_IN_LIST_SUCESS',
  REMOVE_MOVIE_IN_LIST_REQUEST = '@movies/REMOVE_MOVIE_IN_LIST',
  REMOVE_MOVIE_IN_LIST_SUCESS = '@movies/REMOVE_MOVIE_IN_LIST',
}

/**
 * Data types
 */
export interface Movie {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieDetails {
  Title: string;
  Year: number;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Language: string;
  Awards: string;
  Poster: string;
  imdbRating: string;
  imdbID: string;
  Type: string;
  Production: string;
}

export interface PaginateSucess {
  pageNumber: number;
  movies: Movie[];
}

export interface ActionSearchRequest extends AnyAction {
  payload: string;
}

/**
 * State type
 */
export interface MovieState {
  readonly list: Movie[];
  readonly currentMovie: MovieDetails | null;
  readonly currentSearch: Movie[];
  readonly loadingSearch: boolean;
  readonly loadingPaginate: boolean;
  readonly currentPage: number;
  readonly lastSearchParam: string;
}
