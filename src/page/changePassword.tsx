import React from "react";
import Auth from "../component/auth";
import NormalInput from "../component/widgets/inputs/normalInput";
import PasswordInput from "../component/widgets/inputs/passwordInput";
import PinkButton2 from "../component/widgets/buttons/pinkButton2";
import Title2 from "../component/widgets/texts/title2";
import Text1 from "../component/widgets/texts/text1";

export default function ChangePassword() {
  return (
    <Auth>
      <Title2>Changer de mot de passe</Title2>
      <div className="mt-3">
        <Text1>
          Mot de passe oublié ?<br></br>On t’explique par e-mail comment le
          changer.
        </Text1>
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
          <PinkButton2>Me connecter</PinkButton2>
        </div>
      </div>
    </Auth>
  );
}
