import React from "react";
import Auth from "../component/auth";
import SocialButtonGroup from "../component/auth/socialButtonGroup";
import AuthTitle from "../component/auth/authTitle";
import FormSeperator from "../component/auth/formSeperator";
import NormalInput from "../component/widgets/inputs/normalInput";
import PasswordInput from "../component/widgets/inputs/passwordInput";
import PinkButton from "../component/widgets/buttons.tsx/pinkButton";

export default function SignUp() {
  return (
    <Auth>
      <AuthTitle>Inscription</AuthTitle>
      <div className="mt-8">
        <SocialButtonGroup />
      </div>
      <FormSeperator>Ou</FormSeperator>
      <div className="mt-3">
        <div>
          <NormalInput label="Email" type="email" autoComplete="email" />
        </div>
        <div className="mt-6">
          <PasswordInput label="Mot de passe" />
        </div>
        <div className="mt-6">
          <PasswordInput label="Répétez le mot de passe" />
        </div>
        <div className="mt-6">
          <PinkButton>Me connecter</PinkButton>
        </div>
        <div className="text-base font-medium text-gray-700 text-center mt-8">
          Tu as déjà un compte?
          <span className="text-pink-3 hover:text-pink-2 cursor-pointer ml-2">
            Connecte toi ici
          </span>
        </div>
      </div>
    </Auth>
  );
}
