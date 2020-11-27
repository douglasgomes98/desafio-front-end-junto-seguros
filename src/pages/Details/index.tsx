import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '~/components/Menu';
import {
  Container,
  ContainerDetails,
  InfoMovie,
  PostMovie,
  MovieData,
} from './styles';
import { ApplicationState } from '~/store/types';
import { Movie, MovieDetails } from '~/store/modules/movies/types';
import {
  addMovieInListRequest,
  removeMovieInListRequest,
} from '~/store/modules/movies/actions';

const MyList: React.FC = () => {
  const dispatch = useDispatch();
  const [exists, setExists] = useState(false);

  const movie = useSelector<ApplicationState, MovieDetails | null>(
    (state) => state.movies.currentMovie,
  );
  const list = useSelector<ApplicationState, Movie[]>(
    (state) => state.movies.list,
  );

  useEffect(() => {
    if (movie) {
      const filtered = list.filter((item) => item.imdbID === movie.imdbID)[0];

      if (filtered) {
        setExists(true);
      } else {
        setExists(false);
      }
    }
  }, [list, movie]);

  function handleAddMovie() {
    if (movie) {
      const data: Movie = {
        Title: movie.Title,
        Year: movie.Year,
        imdbID: movie.imdbID,
        Type: movie.Type,
        Poster: movie.Poster,
      };
      dispatch(addMovieInListRequest(data));
    }
  }

  function handleDeleteMovie() {
    if (movie) {
      const data: Movie = {
        Title: movie.Title,
        Year: movie.Year,
        imdbID: movie.imdbID,
        Type: movie.Type,
        Poster: movie.Poster,
      };
      dispatch(removeMovieInListRequest(data));
    }
  }

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Junto Seguros - ${movie?.Title}`}</title>
      </Helmet>
      <Menu />
      <ContainerDetails className="container pb-3 pt-3">
        {movie ? (
          <>
            <h1>{movie.Title}</h1>
            <div className="row">
              <PostMovie className="text-justify col-lg-3">
                <img src={movie.Poster} alt={movie.Title} />
                <InfoMovie className="text-muted">{movie.Genre}</InfoMovie>
                <InfoMovie className="text-muted">{movie.Released}</InfoMovie>
                <div>{`Duration: ${movie.Runtime}`}</div>
                <div>{`Languages: ${movie.Language}`}</div>
                <div>{movie.Production}</div>
              </PostMovie>
              <MovieData className="p-2 col">
                <div className="form-control-plaintext text-justify">
                  {movie.Plot}
                </div>
                <InfoMovie className="text-muted">{`Directors: ${movie.Director}`}</InfoMovie>
                <InfoMovie className="text-muted">{`Actors: ${movie.Actors}`}</InfoMovie>
                <InfoMovie className="text-muted">{`IMDB: ${movie.imdbRating}`}</InfoMovie>
                <div className="d-flex justify-content-center">
                  {exists ? (
                    <button
                      type="button"
                      className="btn btn-danger mt-3"
                      onClick={() => handleDeleteMovie()}
                    >
                      Remover da minha lista
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-secondary mt-3"
                      onClick={() => handleAddMovie()}
                    >
                      Adicionar à minha lista
                    </button>
                  )}
                </div>
              </MovieData>
            </div>
          </>
        ) : (
          <div className="text-center justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </ContainerDetails>
    </Container>
  );
};

export default MyList;
