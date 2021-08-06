import React from "react";
import { useHistory } from "react-router-dom";
import AuthDescription from "../../component/auth/authDescription";
import AuthTitle from "../../component/auth/authTitle";
import AdultsSelector from "../../component/setupProfile/adultsSelector";
import ChildrenSelector from "../../component/setupProfile/childrenSelector";
import PinkButton from "../../component/widgets/buttons.tsx/pinkButton";
import CheckButton from "../../component/widgets/inputs/checkButton";

const Welcome: React.FC = () => {
  let history = useHistory();
  const handleClick = () => {
    history.push("/setup-profile/1");
  };

  return (
    <>
      <AuthTitle>Bienvenue, goodista!</AuthTitle>
      <div className="mt-2">
        <AuthDescription>
          Ta mission: planifier les meilleurs repas, pour ta santé et notre
          planète.
        </AuthDescription>
      </div>
      <div className="mt-6">
        <AdultsSelector />
      </div>
      <div className="mt-6">
        <ChildrenSelector />
      </div>
      <div className="mt-6">
        <CheckButton label="Pas d’enfant à la maison" />
      </div>
      <div className="mt-6">
        <PinkButton onClick={handleClick}>Continuer</PinkButton>
      </div>
    </>
  );
};

export default Welcome;
