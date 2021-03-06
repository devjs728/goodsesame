import Slider from "../../../setupProfile/slider";
import PinkButton2 from "../../../widgets/buttons/pinkButton2";
import Text1 from "../../../widgets/texts/text1";
import Title2 from "../../../widgets/texts/title2";

const KitchenMe: React.FC<{ onChange: () => void }> = ({ onChange }) => {
  const handleNext = () => {
    onChange();
  };

  return (
    <>
      <Title2>La cuisine & moi</Title2>
      <div className="mt-2">
        <Text1>As-tu le temps de cuisiner?</Text1>
      </div>
      <div className="mt-8">
        <Slider
          label="As-tu le temps de cuisiner?"
          imageName="clock"
          levels={["Moyen0", "Moyen1", "Moyen2"]}
        />
      </div>
      <div className="mt-8">
        <Slider
          label={
            <>
              Quel est ton degré de maîtrise des<br></br>fourneaux ?
            </>
          }
          imageName="chef_hat"
          levels={["Débutant0", "Débutant1", "Débutant2"]}
        />
      </div>
      <div className="mt-8">
        <Slider
          label={
            <>
              Quel budget souhaites-tu accorder<br></br>à chaque repas ?
            </>
          }
          imageName="currency"
          levels={["Débutant0", "Débutant1", "Maxi"]}
        />
      </div>
      <div className="mt-7">
        <PinkButton2 className="w-full" onClick={handleNext}>
          Continuer
        </PinkButton2>
      </div>
    </>
  );
};

export default KitchenMe;
