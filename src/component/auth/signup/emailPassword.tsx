import { useState } from "react";
import { Link } from "react-router-dom";
import { validateEmail } from "../../../utils/validate";
import PinkButton from "../../widgets/buttons.tsx/pinkButton";
import NormalInput from "../../widgets/inputs/normalInput";
import PasswordInput from "../../widgets/inputs/passwordInput";
import AuthTitle from "../authTitle";
import FormSeperator from "../formSeperator";
import SocialButtonGroup from "../socialButtonGroup";

const EmailPassword: React.FC<{
  initEmail: string;
  initPassword: string;
  onChange: (email: string, password: string) => void;
}> = ({ initEmail, initPassword, onChange }) => {
  const [email, setEmail] = useState<string>(initEmail);
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>(initPassword);
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const handleSubmit = () => {
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    let validate = true;
    if (!email) {
      validate = false;
      setEmailError("Veuillez insérer un e-mail!");
    } else if (!validateEmail(email)) {
      validate = false;
      setEmailError("Veuillez insérer un e-mail de validation!");
    }
    if (!password) {
      validate = false;
      setPasswordError("Veuillez insérer un mot de passe !");
    }
    if (!confirmPassword) {
      validate = false;
      setConfirmPasswordError("Veuillez saisir un mot de passe confirmé !");
    } else if (password !== confirmPassword) {
      validate = false;
      setConfirmPasswordError("le mot de passe ne compte pas !");
    }

    if (!validate) {
      return;
    }

    onChange(email, password);
  };
  return (
    <>
      <AuthTitle>Inscription</AuthTitle>
      <div className="mt-8">
        <SocialButtonGroup />
      </div>
      <FormSeperator>Ou</FormSeperator>
      <div className="mt-3">
        <div>
          <NormalInput
            label="Email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            error={emailError}
          />
        </div>
        <div className="mt-6">
          <PasswordInput
            label="Mot de passe"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            error={passwordError}
          />
        </div>
        <div className="mt-6">
          <PasswordInput
            label="Répétez le mot de passe"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            error={confirmPasswordError}
          />
        </div>
        <div className="mt-6">
          <PinkButton onClick={handleSubmit}>Me connecter</PinkButton>
        </div>
        <div className="text-base font-medium text-gray-700 text-center mt-8">
          Tu as déjà un compte?
          <Link
            to="/sign-in"
            className="text-pink-3 hover:text-pink-2 cursor-pointer ml-2"
          >
            Connecte toi ici
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmailPassword;
