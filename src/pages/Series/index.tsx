import React from 'react';
import { Helmet } from 'react-helmet';
import Menu from '~/components/Menu';

import { Container } from './styles';

const Series: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Junto Seguros - Séries</title>
      </Helmet>
      <Menu />
      <Container>
        <h1>Series</h1>
      </Container>
    </>
  );
};

export default Series;
