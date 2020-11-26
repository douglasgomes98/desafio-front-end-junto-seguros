import React from 'react';
import { Helmet } from 'react-helmet';
import Menu from '~/components/Menu';

import { Container } from './styles';

const Movies: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Junto Seguros - Filmes</title>
      </Helmet>
      <Menu />
      <Container>
        <h1>Movies</h1>
      </Container>
    </>
  );
};

export default Movies;
