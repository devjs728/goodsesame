import React from "react";
import Auth from "../component/auth";
import NormalInput from "../component/widgets/inputs/normalInput";
import PinkButton2 from "../component/widgets/buttons/pinkButton2";
import Title2 from "../component/widgets/texts/title2";
import Text1 from "../component/widgets/texts/text1";

export default function ForgotPassword() {
  return (
    <Auth>
      <Title2>Mot de passe</Title2>
      <div className="mt-3">
        <Text1>
          Mot de passe oublié ?<br></br>On t’explique par e-mail comment le
          changer.
        </Text1>
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
          <PinkButton2>Envoyer</PinkButton2>
        </div>
      </div>
    </Auth>
  );
}
