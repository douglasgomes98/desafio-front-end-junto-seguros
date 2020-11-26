import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ApplicationState } from '~/store/types';

interface IRouteWrapper extends RouteProps {
  isPrivate?: boolean;
}

const RouteWrapper: React.FC<IRouteWrapper> = ({
  isPrivate = false,
  children,
  ...rest
}) => {
  const signed = useSelector<ApplicationState>((state) => state.auth.signed);

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/movies" />;
  }

  if (isPrivate) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          signed ? (
            children
          ) : (
            <Redirect to={{ pathname: '/', state: { from: location } }} />
          )
        }
      />
    );
  }

  return <Route {...rest} />;
};

export default RouteWrapper;
