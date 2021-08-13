import React, { useState } from "react";
import AdultsSelector from "../../../setupProfile/adultsSelector";
import ChildrenSelector from "../../../setupProfile/childrenSelector";
import PinkButton from "../../../widgets/buttons/pinkButton";
import CheckButton from "../../../widgets/inputs/checkButton";
import Text1 from "../../../widgets/texts/text1";
import Title2 from "../../../widgets/texts/title2";

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
      <Title2>Bienvenue, goodista!</Title2>
      <div className="mt-2">
        <Text1>
          Ta mission: planifier les meilleurs repas, pour ta santé et notre
          planète.
        </Text1>
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
