import React from "react";
import { Switch } from "react-router-dom";
import SignIn from "./page/signIn";
import { AuthRoute, PrivateRoute } from "./utils/privateRoute";

export default function Routes() {
  return (
    <Switch>
      <AuthRoute exact path="/sign-in" component={SignIn} />
    </Switch>
  );
}
