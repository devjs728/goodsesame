import React from "react";
import { Switch } from "react-router-dom";
import ConfirmEmail from "./page/confirmEmail";
import SignIn from "./page/signIn";
import SignUp from "./page/signUp";
import ForgotPassword from "./page/forgotPassword";
import { AuthRoute } from "./utils/privateRoute";
import ChangePassword from "./page/changePassword";
import SetupProfile from "./page/setupProfile";

export default function Routes() {
  return (
    <Switch>
      <AuthRoute exact path="/sign-in" component={SignIn} />
      <AuthRoute exact path="/sign-up" component={SignUp} />
      <AuthRoute exact path="/confirm-email" component={ConfirmEmail} />
      <AuthRoute exact path="/forgot-password" component={ForgotPassword} />
      <AuthRoute exact path="/change-password" component={ChangePassword} />
      <AuthRoute path="/setup-profile" component={SetupProfile} />
    </Switch>
  );
}
