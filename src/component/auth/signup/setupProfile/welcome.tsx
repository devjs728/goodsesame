import React, { useState } from "react";
import AuthDescription from "../../authDescription";
import AuthTitle from "../../authTitle";
import AdultsSelector from "../../../setupProfile/adultsSelector";
import ChildrenSelector from "../../../setupProfile/childrenSelector";
import PinkButton from "../../../widgets/buttons.tsx/pinkButton";
import CheckButton from "../../../widgets/inputs/checkButton";

const Welcome: React.FC<{
  initAdulst: number;
  initChild: number;
  onChange: (adults: number, child: number) => void;
}> = ({ initAdulst, initChild, onChange }) => {
  const [adults, setAdults] = useState<number>(initAdulst);
  const [child, setChild] = useState<number>(initChild);
  const handleNext = () => {
    onChange(adults, child);
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
        <AdultsSelector
          maxValue={4}
          value={adults}
          onChange={(value) => {
            setAdults(value);
          }}
        />
      </div>
      <div className="mt-6">
        <ChildrenSelector
          maxValue={4}
          value={child}
          onChange={(value) => {
            setChild(value);
          }}
        />
      </div>
      <div className="mt-6">
        <CheckButton
          label="Pas d’enfant à la maison"
          checked={child === 0}
          onChange={(checked) => {
            console.log(checked);
            setChild(checked ? 0 : 1);
          }}
        />
      </div>
      <div className="mt-6">
        <PinkButton onClick={handleNext}>Continuer</PinkButton>
      </div>
    </>
  );
};

export default Welcome;
