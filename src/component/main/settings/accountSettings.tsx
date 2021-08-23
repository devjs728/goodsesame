import { ExclamationCircleIcon, PlusIcon } from "@heroicons/react/solid";
import { ReactNode } from "react";
import { classNames } from "../../../utils";
import PinkButton1 from "../../widgets/buttons/pinkButton1";
import PinkButton2 from "../../widgets/buttons/pinkButton2";
import AppleIcon from "../../widgets/icons/appleIcon";
import FaceBookIcon from "../../widgets/icons/facebookIcon";
import GoogleIcon from "../../widgets/icons/googleIcon";
import MonoPrixIcon from "../../widgets/icons/monoprixIcon";
import TwitterIcon from "../../widgets/icons/twitterIcon";
import Text1 from "../../widgets/texts/text1";
import Title2 from "../../widgets/texts/title2";
import Title3 from "../../widgets/texts/title3";
import ToggleSwitch from "../../widgets/toggleSwitch";

const AccountSettings: React.FC = () => {
  return (
    <>
      <div>
        <Title2>Mes comptes liés</Title2>
        <div>
          <SocialNode
            className="bg-blue-3"
            name="Facebook"
            description="Compte de connexion"
          >
            <FaceBookIcon fillColor="#fff" />
          </SocialNode>
          <SocialNode
            className="bg-pink-4"
            name="Monoprix"
            description="Compte marchand"
          >
            <MonoPrixIcon fillColor="#fff" />
          </SocialNode>
          <SocialNode
            className="bg-blue-1"
            name="Google"
            description="Compte marchand"
          >
            <GoogleIcon fillColor="#fff" />
          </SocialNode>
          <SocialNode
            className="bg-black-1"
            name="Apple"
            description="Compte marchand"
          >
            <AppleIcon fillColor="#fff" />
          </SocialNode>
          <SocialNode
            className="bg-blue-2"
            name="Twitter"
            description="Compte marchand"
          >
            <TwitterIcon fillColor="#fff" />
          </SocialNode>
        </div>
        <div className="mt-8">
          <PinkButton2>
            <PlusIcon className="w-5 h-5" />
            <span className="ml-2">Ajouter un compte</span>
          </PinkButton2>
        </div>
      </div>
      <div className="mt-8">
        <Title2>Notifications</Title2>
        <div className="flex justify-between items-center mt-6">
          <div>
            <Title3>Newsletter GoodSesame</Title3>
            <Text1>
              Reçois des idées recettes, les nouveautés et des offres promo
            </Text1>
          </div>
          <ToggleSwitch id="new_sletter" />
        </div>
        <div className="flex justify-between items-center mt-6">
          <div>
            <Title3>Newsletter GoodSesame</Title3>
            <Text1>
              Reçois des idées recettes, les nouveautés et des offres promo
            </Text1>
          </div>
          <ToggleSwitch id="notifications" />
        </div>
        <div className="mt-8">
          <PinkButton2>Sauvegarder</PinkButton2>
        </div>
      </div>
      <div className="mt-10 block md:flex items-cetner justify-between">
        <PinkButton1>
          <img
            src="/assets/image/close_account.png"
            className="h-5"
            alt="close account"
          />
          <span className="text-pink-4 ml-2 whitespace-nowrap">
            Supprimer mon compte
          </span>
        </PinkButton1>
        <Text1 className="mt-5 sm:mt-0">
          <div className="flex flex-wrap">
            <ExclamationCircleIcon className="text-pink-4 w-3.5 h-3.5" />
            <span className="ml-1">
              Après avoir supprimé votre compte, toutes vos données<br></br>{" "}
              seront perdues.
            </span>
          </div>
        </Text1>
      </div>
    </>
  );
};

const SocialNode: React.FC<{
  children: ReactNode;
  className: string;
  name: string;
  description: string;
  onClick?: React.MouseEventHandler;
}> = ({ children, className, name, description, onClick }) => {
  return (
    <div className="flex justify-between items-center my-4">
      <div className="flex items-center">
        <div
          className={classNames(
            "w-10 h-11 flex justify-center items-center rounded-md",
            className ?? ""
          )}
        >
          {children}
        </div>
        <div className="ml-4">
          <Title3>{name}</Title3>
          <Text1>{description}</Text1>
        </div>
      </div>
      <CloseButton onClick={onClick} />
    </div>
  );
};

const CloseButton: React.FC<{ onClick?: React.MouseEventHandler }> = ({
  onClick,
}) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-pink-4 hover:text-red-600 cursor-pointer"
      onClick={onClick}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.63125 7.6315C7.11325 7.9175 6.62625 8.2795 6.18725 8.7185L1.88325 13.0245C-0.62775 15.5355 -0.62775 19.6065 1.88325 22.1175C4.39425 24.6285 8.46525 24.6285 10.9763 22.1175L13.9053 19.1885C12.6273 19.2835 11.3333 19.0925 10.1263 18.6135L8.79925 19.9405C7.49225 21.2475 5.36625 21.2475 4.05925 19.9405C2.75225 18.6335 2.75225 16.5075 4.05925 15.2005L8.36325 10.8945C8.82825 10.4295 9.39725 10.1305 9.99625 9.9965C11.5872 9.6405 13.1863 10.4765 13.8303 11.9455L16.0763 9.7005C14.2203 6.8865 10.5182 6.0405 7.63125 7.6315ZM10.0943 4.8115L13.0233 1.8825C15.5343 -0.6275 19.6042 -0.6275 22.1152 1.8825C24.6262 4.3935 24.6262 8.4645 22.1143 10.9755L17.8103 15.2805C17.3713 15.7195 16.8843 16.0815 16.3663 16.3675C14.9473 17.1505 13.2952 17.3555 11.7533 16.9845C10.5632 16.6975 9.52925 16.0925 8.71725 15.2805C8.40225 14.9655 8.15725 14.6565 7.92125 14.2985L10.1673 12.0535C10.3303 12.4245 10.5913 12.8015 10.8943 13.1045C12.1943 14.4045 14.3233 14.4155 15.6343 13.1045L19.9393 8.7995C21.2463 7.4925 21.2463 5.3665 19.9393 4.0595C18.6323 2.7525 16.5063 2.7525 15.1993 4.0595L13.8733 5.3855C12.6663 4.9075 11.3713 4.7155 10.0943 4.8115ZM22.6 21L25 23.4L23.4 25L21 22.6L18.6 25L17 23.4L19.4 21L17 18.6L18.6 17L21 19.4L23.4 17L25 18.6L22.6 21Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default AccountSettings;
