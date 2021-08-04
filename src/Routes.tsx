import React from "react";
import { Switch } from "react-router-dom";
import SignIn from "./page/signIn";
import SignUp from "./page/signUp";
import { AuthRoute, PrivateRoute } from "./utils/privateRoute";

export default function Routes() {
  return (
    <Switch>
      <AuthRoute exact path="/sign-in" component={SignIn} />
      <AuthRoute exact path="/sign-up" component={SignUp} />
    </Switch>
  );
}
