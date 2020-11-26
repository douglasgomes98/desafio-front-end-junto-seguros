import React from 'react';

import { Container } from './styles';

interface IMovie {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface ICard {
  data: IMovie;
}

const Card: React.FC<ICard> = ({ data, ...rest }) => {
  return (
    <Container className="pl-1 pr-1 pb-1 d-flex justify-content-center">
      <div className="card shadow-sm rounded" {...rest}>
        <img
          src={data.Poster}
          className="card-img-top rounded"
          alt={data.Title}
        />
      </div>
    </Container>
  );
};

export default Card;
