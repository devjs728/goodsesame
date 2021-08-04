import Auth from "../component/auth";
import AuthTitle from "../component/auth/authTitle";
import AuthDescription from "../component/auth/authDescription";
import NormalInput from "../component/inputs/normalInput";
import PinkButton from "../component/buttons.tsx/pinkButton";
import GrayButton from "../component/buttons.tsx/grayButton";
import { ChevronLeftIcon } from "@heroicons/react/solid";

export default function ConfirmEmail() {
  return (
    <Auth>
      <GrayButton>
        <ChevronLeftIcon className="w-6 h-6 mr-1" />
        En arrière
      </GrayButton>
      <div className="mt-8">
        <AuthTitle>Confirmation du courrier</AuthTitle>
      </div>
      <div className="mt-3">
        <AuthDescription>
          Nous t’avons envoyé par e-mail un code secret à usage unique
        </AuthDescription>
      </div>
      <div className="mt-8">
        <div>
          <NormalInput label="Code" type="text" />
        </div>
        <div className="mt-6">
          <PinkButton>Confirmer mon e-mail</PinkButton>
        </div>
        <div className="text-base font-medium text-gray-700 text-center mt-8">
          Tu n’as rien reçu?
          <span className="text-pink-1 hover:text-pink-2 cursor-pointer ml-2">
            Renvoyer l’e-mail
          </span>
        </div>
      </div>
    </Auth>
  );
}
