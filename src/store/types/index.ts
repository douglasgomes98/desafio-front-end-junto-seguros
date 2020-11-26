import { AuthState } from '../modules/auth/types';
import { MovieState } from '../modules/movies/types';

export interface ApplicationState {
  auth: AuthState;
  movies: MovieState;
}
