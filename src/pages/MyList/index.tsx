import React from 'react';
import { Helmet } from 'react-helmet';
import Menu from '~/components/Menu';

import { Container } from './styles';

const MyList: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Junto Seguros - Minha Lista</title>
      </Helmet>
      <Menu />
      <Container>
        <h1>MyList</h1>
      </Container>
    </>
  );
};

export default MyList;
