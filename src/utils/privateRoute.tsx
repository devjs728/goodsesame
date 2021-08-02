import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { checkLogin } from "./checkLogin";

const PrivateRoute = ({
  component: Component,
  ...rest
}: {
  component: Function;
}) => {
  const location = useLocation();
  const isLogin = checkLogin();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/introduce",
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

const AuthRoute = ({
  component: Component,
  ...rest
}: {
  component: Function;
}) => {
  const isLogin = checkLogin();

  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
};

export { PrivateRoute, AuthRoute };
