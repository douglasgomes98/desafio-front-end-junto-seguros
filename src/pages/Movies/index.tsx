import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '~/components/Menu';
import { Container, ContainerMovies } from './styles';
import Card from '~/components/Card';
import { ApplicationState } from '~/store/types';
import { Movie } from '~/store/modules/movies/types';
import {
  searcMoviesRequest,
  paginateCurrentSearchRequest,
} from '~/store/modules/movies/actions';

const Movies: React.FC = () => {
  const currentSearch = useSelector<ApplicationState, Movie[]>(
    (state) => state.movies.currentSearch,
  );
  const loadingSearch = useSelector<ApplicationState>(
    (state) => state.movies.loadingSearch,
  );
  const loadingPaginate = useSelector<ApplicationState>(
    (state) => state.movies.loadingPaginate,
  );
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  async function handleSearchMovies() {
    dispatch(searcMoviesRequest(input));
  }

  function handlePaginate() {
    dispatch(paginateCurrentSearchRequest());
  }

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Junto Seguros - Filmes</title>
      </Helmet>
      <Menu />
      <ContainerMovies className="container pb-3 pt-3">
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Pesquise por um filme"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyPress={(event) =>
              event.key === 'Enter' && handleSearchMovies()
            }
          />
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleSearchMovies()}
            >
              Pesquisar
            </button>
          </div>
        </div>
        {loadingSearch ? (
          <div className="text-center justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
              {currentSearch.map((movie) => (
                <Card key={movie.imdbID} data={movie} />
              ))}
            </div>
            {currentSearch.length > 0 && (
              <div className="container d-flex justify-content-center pt-3">
                {loadingPaginate ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handlePaginate()}
                  >
                    Mais filmes
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </ContainerMovies>
    </Container>
  );
};

export default Movies;
