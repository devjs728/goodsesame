import React from "react";
import Auth from "../component/auth";
import AuthTitle from "../component/auth/authTitle";
import AuthDescription from "../component/auth/authDescription";
import NormalInput from "../component/widgets/inputs/normalInput";
import PasswordInput from "../component/widgets/inputs/passwordInput";
import PinkButton from "../component/widgets/buttons.tsx/pinkButton";

export default function ChangePassword() {
  return (
    <Auth>
      <AuthTitle>Changer de mot de passe</AuthTitle>
      <div className="mt-3">
        <AuthDescription>
          Mot de passe oublié ?<br></br>On t’explique par e-mail comment le
          changer.
        </AuthDescription>
      </div>
      <div className="mt-6">
        <div>
          <NormalInput label="Code de réinitialisation:" type="text" />
        </div>
        <div className="mt-6">
          <PasswordInput label="Nouveau mot de passe :" />
        </div>
        <div className="mt-6">
          <PasswordInput label="Répétez le mot de passe" />
        </div>
        <div className="mt-6">
          <PinkButton>Me connecter</PinkButton>
        </div>
      </div>
    </Auth>
  );
}
