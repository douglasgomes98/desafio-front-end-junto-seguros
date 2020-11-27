import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Title } from './styles';
import { Movie } from '~/store/modules/movies/types';
import {
  addMovieInListRequest,
  removeMovieInListRequest,
  showDetailsMovieRequest,
} from '~/store/modules/movies/actions';
import { ApplicationState } from '~/store/types';
import { history } from '~/store/configureStore';

interface ICard {
  data: Movie;
}

const Card: React.FC<ICard> = ({ data, ...rest }) => {
  const dispatch = useDispatch();
  const [exists, setExists] = useState(false);

  const list = useSelector<ApplicationState, Movie[]>(
    (state) => state.movies.list,
  );

  function handleAddMovie() {
    dispatch(addMovieInListRequest(data));
  }

  function handleDeleteMovie() {
    dispatch(removeMovieInListRequest(data));
  }

  function handleNavigateToDetails() {
    dispatch(showDetailsMovieRequest(data));
    history.push('/details');
  }

  useEffect(() => {
    const filtered = list.filter((movie) => movie.imdbID === data.imdbID)[0];

    if (filtered) {
      setExists(true);
    } else {
      setExists(false);
    }
  }, [data, list]);

  return (
    <Container className="pl-1 pr-1 pb-2 d-flex justify-content-center">
      <div className="card shadow-sm rounded" {...rest}>
        <img
          src={data.Poster}
          className="card-img-top rounded-top"
          data-toggle="tooltip"
          data-placement="top"
          title={data.Title}
          alt={data.Title}
          onClick={() => handleNavigateToDetails()}
        />
        <div className="card-body p-2">
          <Title className="text-truncate font-weight-bold mb-2">
            {data.Title}
          </Title>
          {exists ? (
            <button
              type="button"
              className="btn btn-outline-danger btn-sm btn-block"
              onClick={() => handleDeleteMovie()}
            >
              Remover da minha lista
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm btn-block"
              onClick={() => handleAddMovie()}
            >
              Adicionar à minha lista
            </button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Card;
