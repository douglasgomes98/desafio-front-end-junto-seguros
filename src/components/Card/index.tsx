import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Title } from './styles';
import { Movie } from '~/store/modules/movies/types';
import { addMovieInListRequest } from '~/store/modules/movies/actions';

interface ICard {
  data: Movie;
}

const Card: React.FC<ICard> = ({ data, ...rest }) => {
  const dispatch = useDispatch();

  function handleAddMovie() {
    dispatch(addMovieInListRequest(data));
  }

  return (
    <Container className="pl-1 pr-1 pb-2 d-flex justify-content-center">
      <div className="card shadow-sm rounded" {...rest}>
        <img
          src={data.Poster}
          className="card-img-top rounded-top"
          alt={data.Title}
        />
        <div className="card-body p-2">
          <Title className="text-truncate font-weight-bold mb-2">
            {data.Title}
          </Title>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm btn-block"
            onClick={() => handleAddMovie()}
          >
            Adicionar à minha lista
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Card;
