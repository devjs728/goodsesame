import React from "react";
import Auth from "../component/auth";
import AuthTitle from "../component/auth/authTitle";
import AuthDescription from "../component/auth/authDescription";
import NormalInput from "../component/widgets/inputs/normalInput";
import PinkButton from "../component/widgets/buttons.tsx/pinkButton";

export default function ForgotPassword() {
  return (
    <Auth>
      <AuthTitle>Mot de passe</AuthTitle>
      <div className="mt-3">
        <AuthDescription>
          Mot de passe oublié ?<br></br>On t’explique par e-mail comment le
          changer.
        </AuthDescription>
      </div>
      <div className="mt-6">
        <div>
          <NormalInput label="Email" type="email" autoComplete="email" />
        </div>
        <div className="text-base font-medium text-gray-700 text-left mt-3">
          00:53
          <span className="text-pink-3 hover:text-pink-2 cursor-pointer ml-2">
            Renvoyer le code.
          </span>
        </div>
        <div className="mt-6">
          <PinkButton>Envoyer</PinkButton>
        </div>
      </div>
    </Auth>
  );
}
