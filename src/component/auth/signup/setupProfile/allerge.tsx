import { useState } from "react";
import AllergiesSelector from "../../../setupProfile/allergiesSelector";
import DarkGrayButton from "../../../widgets/buttons/darkGrayButton";
import PinkButton2 from "../../../widgets/buttons/pinkButton2";
import Text1 from "../../../widgets/texts/text1";
import Title2 from "../../../widgets/texts/title2";

const Allergies: React.FC<{ onChange: () => void }> = ({ onChange }) => {
  const [isFirst, setFirst] = useState<boolean>(true);
  const handleNext = () => {
    onChange();
  };

  if (isFirst) {
    return (
      <>
        <Title2>Allergies alimentaires</Title2>
        <div className="mt-2">
          <Text1>Des allergies à signaler ?</Text1>
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
        <Title2>Allergies</Title2>
        <div className="mt-2">
          <Text1>Précise les allergies de tous les membres de ton foyer</Text1>
        </div>
        <div className="mt-5">
          <AllergiesSelector />
        </div>
        <div className="mt-6">
          <PinkButton2 onClick={handleNext}>Continuer</PinkButton2>
        </div>
      </>
    );
  }
};

export default Allergies;
