import Auth from "../component/auth";
import NormalInput from "../component/widgets/inputs/normalInput";
import PinkButton from "../component/widgets/buttons/pinkButton";
import GrayButton from "../component/widgets/buttons/grayButton";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import Title2 from "../component/widgets/texts/title2";
import Text1 from "../component/widgets/texts/text1";

export default function ConfirmEmail() {
  return (
    <Auth>
      <GrayButton>
        <ChevronLeftIcon className="w-6 h-6 mr-1" />
        En arrière
      </GrayButton>
      <div className="mt-8">
        <Title2>Confirmation du courrier</Title2>
      </div>
      <div className="mt-3">
        <Text1>
          Nous t’avons envoyé par e-mail un code secret à usage unique
        </Text1>
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
          <span className="text-pink-3 hover:text-pink-2 cursor-pointer ml-2">
            Renvoyer l’e-mail
          </span>
        </div>
      </div>
    </Auth>
  );
}
