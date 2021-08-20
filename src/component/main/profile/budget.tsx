import Slider from "../../setupProfile/slider";
import PinkButton2 from "../../widgets/buttons/pinkButton2";
import Title2 from "../../widgets/texts/title2";

const Budget: React.FC = () => {
  return (
    <>
      <Title2>La cuisine & moi</Title2>
      <div className="block sm:grid grid-flow-col grid-cols-2 gap-20 mt-5">
        <Slider
          label="Quel budget souhaites-tu accorder à chaque repas ?"
          imageName="currency"
          levels={["Débutant0", "Débutant1", "Maxi"]}
        />
      </div>
      <PinkButton2 className="mt-8 px-2.5 py-2 w-max">Sauvegarder</PinkButton2>
    </>
  );
};

export default Budget;
