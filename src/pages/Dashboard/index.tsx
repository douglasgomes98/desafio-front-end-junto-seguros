import React from 'react';
import Helmet from 'react-helmet';
import Menu from '~/components/Menu';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Junto Seguros - Dashboard</title>
      </Helmet>
      <Menu />
      <Container>
        <h1>Dashboard</h1>
      </Container>
    </>
  );
};

export default Dashboard;
