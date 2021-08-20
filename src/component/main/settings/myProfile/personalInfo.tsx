import PinkButton2 from "../../../widgets/buttons/pinkButton2";
import NormalInput from "../../../widgets/inputs/normalInput";

const PersonalInfo: React.FC = () => {
  return (
    <>
      <div className="block sm:grid grid-flow-col grid-cols-2 gap-4">
        <NormalInput label="Nom" type="text" />
        <NormalInput label="Nom de famille" type="text" />
      </div>
      <div className="mt-5">
        <NormalInput label="Email" type="email" autoComplete="email" />
      </div>
      <div className="mt-5">
        <NormalInput label="Anniversaire" type="date" />
      </div>
      <div className="mt-8">
        <PinkButton2>Sauvegarder</PinkButton2>
      </div>
    </>
  );
};

export default PersonalInfo;
