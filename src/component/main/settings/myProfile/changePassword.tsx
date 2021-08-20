import PinkButton2 from "../../../widgets/buttons/pinkButton2";
import PasswordInput from "../../../widgets/inputs/passwordInput";
import Title2 from "../../../widgets/texts/title2";

const ChangePassword: React.FC = () => {
  return (
    <>
      <Title2>Changer le mot de passe</Title2>
      <div className="mt-8">
        <PasswordInput label="Ancien mot de passe" />
      </div>
      <div className="mt-8">
        <PasswordInput label="Nouveau mot de passe" />
      </div>
      <div className="mt-8">
        <PasswordInput label="Répétez le mot de passe" />
      </div>
      <div className="mt-8">
        <PinkButton2>Sauvegarder</PinkButton2>
      </div>
    </>
  );
};

export default ChangePassword;
