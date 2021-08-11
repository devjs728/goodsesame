import { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthDescription from "../../authDescription";
import AuthTitle from "../../authTitle";
import AllergiesSelector from "../../../setupProfile/allergiesSelector";
import DarkGrayButton from "../../../widgets/buttons.tsx/darkGrayButton";
import PinkButton from "../../../widgets/buttons.tsx/pinkButton";

const Allergies: React.FC = () => {
  let history = useHistory();

  const [isFirst, setFirst] = useState<boolean>(true);
  const handleNext = () => {
    history.push("/setup-profile/2");
  };

  if (isFirst) {
    return (
      <>
        <AuthTitle>Allergies alimentaires</AuthTitle>
        <div className="mt-2">
          <AuthDescription>Des allergies à signaler ?</AuthDescription>
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
        <AuthTitle>Allergies</AuthTitle>
        <div className="mt-2">
          <AuthDescription>
            Précise les allergies de tous les membres de ton foyer
          </AuthDescription>
        </div>
        <div className="mt-5">
          <AllergiesSelector />
        </div>
        <div className="mt-6">
          <PinkButton onClick={handleNext}>Continuer</PinkButton>
        </div>
      </>
    );
  }
};

export default Allergies;
