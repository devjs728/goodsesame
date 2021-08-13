import React from "react";
import { Route, Redirect, useLocation, RouteProps } from "react-router-dom";
import { checkLogin } from "./checkLogin";

interface CustomRouteProps extends Omit<RouteProps, "render" | "component"> {
  component: React.ElementType;
}

const PrivateRoute: React.FC<CustomRouteProps> = ({
  component: Component,
  ...rest
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
              pathname: "/sign-in",
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
