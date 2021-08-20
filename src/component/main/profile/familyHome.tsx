import { useState } from "react";
import AdultsSelector from "../../setupProfile/adultsSelector";
import ChildrenSelector from "../../setupProfile/childrenSelector";
import PinkButton2 from "../../widgets/buttons/pinkButton2";
import CheckButton from "../../widgets/inputs/checkButton";
import Title2 from "../../widgets/texts/title2";

const FamilyFome: React.FC = () => {
  const [adults, setAdults] = useState<number>(1);
  const [child, setChild] = useState<number>(1);

  return (
    <>
      <Title2>Foyer familial</Title2>
      <div className="block sm:grid grid-flow-col grid-cols-2 gap-20 mt-5">
        <AdultsSelector
          maxValue={4}
          value={adults}
          onChange={(value) => {
            setAdults(value);
          }}
        />
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
      <PinkButton2 className="mt-8 px-2.5 py-2 w-max">Sauvegarder</PinkButton2>
    </>
  );
};

export default FamilyFome;
