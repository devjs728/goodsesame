import { useState } from "react";
import PreferencesSelector from "../../../setupProfile/preferencesSelector";
import DarkGrayButton from "../../../widgets/buttons/darkGrayButton";
import PinkButton2 from "../../../widgets/buttons/pinkButton2";
import SearchInput from "../../../widgets/inputs/searchInput";
import Text1 from "../../../widgets/texts/text1";
import Title2 from "../../../widgets/texts/title2";

const Preferences: React.FC<{ onChange: () => void }> = ({ onChange }) => {
  const [isFirst, setFirst] = useState<boolean>(true);
  const handleNext = () => {
    onChange();
  };

  if (isFirst) {
    return (
      <>
        <Title2>Préférences alimentaires</Title2>
        <div className="mt-2">
          <Text1>Des aliments à bannir ?</Text1>
        </div>
        <div className="block sm:grid grid-flow-col grid-cols-2 gap-3 mt-8">
          <div>
            <PinkButton2
              className="w-full"
              onClick={() => {
                setFirst(false);
              }}
            >
              Oui
            </PinkButton2>
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
        <Title2>Préférences</Title2>
        <div className="mt-2">
          <Text1>Tu ne souhaites pas manger :</Text1>
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
          <PinkButton2 onClick={handleNext}>Continuer</PinkButton2>
        </div>
      </>
    );
  }
};

export default Preferences;
