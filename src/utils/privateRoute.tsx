import React from 'react';
import { Route, Redirect, useLocation, RouteProps } from 'react-router-dom';
import checkLogin from './checkLogin';

interface CustomRouteProps extends Omit<RouteProps, 'render' | 'component'> {
  component: React.ElementType;
}

const PrivateRoute: React.FC<CustomRouteProps> = ({ component: Component }) => {
  const location = useLocation();
  const isLogin = checkLogin();

  return (
    <Route
      render={props =>
        isLogin ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: {
                from: location,
              },
            }}
          />
        )
      }
    />
  );
};

const AuthRoute: React.FC<CustomRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const isLogin = checkLogin();
  const { exact, path } = rest;

  return (
    <Route
      exact={exact}
      path={path}
      render={props =>
        !isLogin ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }
    />
  );
};

export { PrivateRoute, AuthRoute };
