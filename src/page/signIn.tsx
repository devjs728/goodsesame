import React from "react";
import Auth from "../component/auth";
import SocialButtonGroup from "../component/auth/socialButtonGroup";
import AuthTitle from "../component/auth/authTitle";
import FormSeperator from "../component/auth/formSeperator";
import NormalInput from "../component/inputs/normalInput";
import PasswordInput from "../component/inputs/passwordInput";
import CheckButton from "../component/inputs/checkButton";
import PinkButton from "../component/buttons.tsx/pinkButton";

export default function SignIn() {
  return (
    <Auth>
      <AuthTitle>Connexion</AuthTitle>
      <div className="mt-8">
        <SocialButtonGroup />
      </div>
      <FormSeperator>Ou</FormSeperator>
      <div className="mt-3">
        <div>
          <NormalInput label="Email" type="email" autoComplete="email" />
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <p className="text-base text-gray-900 font-bold">Mot de passe</p>
            <p className="text-base text-pink-1 font-medium hover:text-pink-2 cursor-pointer">
              Mot de passe oublié ?
            </p>
          </div>
          <PasswordInput />
        </div>
        <div className="mt-6">
          <CheckButton label="Se souvenir de moi" />
        </div>
        <div className="mt-6">
          <PinkButton>Me connecter</PinkButton>
        </div>
        <div className="text-base font-medium text-gray-700 text-center mt-8">
          Toujours pas de compte?{" "}
          <span className="text-pink-1 hover:text-pink-2 cursor-pointer">
            C’est par ici
          </span>
        </div>
      </div>
    </Auth>
  );
}
