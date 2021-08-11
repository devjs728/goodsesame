import React, { useState } from "react";
import Auth from "../component/auth";
import SocialButtonGroup from "../component/auth/socialButtonGroup";
import AuthTitle from "../component/auth/authTitle";
import FormSeperator from "../component/auth/formSeperator";
import NormalInput from "../component/widgets/inputs/normalInput";
import PasswordInput from "../component/widgets/inputs/passwordInput";
import CheckButton from "../component/widgets/inputs/checkButton";
import PinkButton from "../component/widgets/buttons.tsx/pinkButton";
import { signIn } from "../api/auth";
import { validateEmail } from "../utils/validate";
import { useDispatch } from "react-redux";
import { setToastify, ToastStatus } from "../store/main/action";
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    setEmailError("");
    setPasswordError("");
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

    if (!validate) {
      return;
    }
    setLoading(true);
    signIn(email, password)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
        dispatch(
          setToastify({
            status: ToastStatus.failed,
            message: "L'e-mail/le mot de passe est incorrect",
          })
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Auth>
      <AuthTitle>Connexion</AuthTitle>
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
          <div className="flex justify-between items-center">
            <p className="text-base text-gray-900 font-bold">Mot de passe</p>
            <Link
              to="/forgot-password"
              className="text-base text-pink-3 font-medium hover:text-pink-2 cursor-pointer"
            >
              Mot de passe oublié ?
            </Link>
          </div>
          <PasswordInput
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            error={passwordError}
          />
        </div>
        <div className="mt-6">
          <CheckButton label="Se souvenir de moi" />
        </div>
        <div className="mt-6">
          <PinkButton onClick={handleSubmit} isLoading={isLoading}>
            Me connecter
          </PinkButton>
        </div>
        <div className="text-base font-medium text-gray-700 text-center mt-8">
          Toujours pas de compte?
          <Link
            to="sign-up"
            className="text-pink-3 hover:text-pink-2 cursor-pointer ml-2"
          >
            C’est par ici
          </Link>
        </div>
      </div>
    </Auth>
  );
};

export default SignIn;
