import Slider from "../../setupProfile/slider";
import PinkButton2 from "../../widgets/buttons/pinkButton2";
import Title2 from "../../widgets/texts/title2";

const KitchenMe: React.FC = () => {
  return (
    <>
      <Title2>La cuisine & moi</Title2>
      <div className="block sm:grid grid-flow-col grid-cols-2 gap-20 mt-5">
        <Slider
          label="As-tu le temps de cuisiner?"
          imageName="clock"
          levels={["Moyen0", "Moyen1", "Moyen2"]}
        />
        <Slider
          label=" Quel est ton degré de maîtrise des fourneaux ?"
          imageName="chef_hat"
          levels={["Débutant0", "Débutant1", "Débutant2"]}
        />
      </div>
      <PinkButton2 className="mt-8 px-2.5 py-2 w-max">Sauvegarder</PinkButton2>
    </>
  );
};

export default KitchenMe;
