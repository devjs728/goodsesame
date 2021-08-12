import { useState } from "react";
import AuthDescription from "../../authDescription";
import AuthTitle from "../../authTitle";
import PreferencesSelector from "../../../setupProfile/preferencesSelector";
import DarkGrayButton from "../../../widgets/buttons.tsx/darkGrayButton";
import PinkButton from "../../../widgets/buttons.tsx/pinkButton";
import SearchInput from "../../../widgets/inputs/searchInput";

const Preferences: React.FC<{ onChange: () => void }> = ({ onChange }) => {
  const [isFirst, setFirst] = useState<boolean>(true);
  const handleNext = () => {
    onChange();
  };

  if (isFirst) {
    return (
      <>
        <AuthTitle>Préférences alimentaires</AuthTitle>
        <div className="mt-2">
          <AuthDescription>Des aliments à bannir ?</AuthDescription>
        </div>
        <div className="block sm:grid grid-flow-col grid-cols-2 gap-3 mt-8">
          <div>
            <PinkButton
              onClick={() => {
                setFirst(false);
              }}
            >
              Oui
            </PinkButton>
          </div>
          <div className="mt-2 sm:mt-0">
            <DarkGrayButton onClick={handleNext}>Non</DarkGrayButton>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <AuthTitle>Préférences</AuthTitle>
        <div className="mt-2">
          <AuthDescription>Tu ne souhaites pas manger :</AuthDescription>
        </div>
        <div className="mt-5">
          <PreferencesSelector />
        </div>
        <p className="text-gray-800 font-bold text-lg mt-8">
          Aliments particuliers
        </p>
        <div>
          <SearchInput />
        </div>
        <div className="mt-7">
          <PinkButton onClick={handleNext}>Continuer</PinkButton>
        </div>
      </>
    );
  }
};

export default Preferences;
