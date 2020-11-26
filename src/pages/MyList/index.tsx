import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import Menu from '~/components/Menu';
import { Container, ContainerMovies } from './styles';
import Card from '~/components/Card';
import { ApplicationState } from '~/store/types';
import { Movie } from '~/store/modules/movies/types';

const MyList: React.FC = () => {
  const list = useSelector<ApplicationState, Movie[]>(
    (state) => state.movies.list,
  );

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Junto Seguros - Minha Lista</title>
      </Helmet>
      <Menu />
      <ContainerMovies className="container pb-3 pt-3">
        <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
          {list.map((movie) => (
            <Card key={movie.imdbID} data={movie} />
          ))}
        </div>
      </ContainerMovies>
    </Container>
  );
};

export default MyList;
