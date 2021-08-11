import { useHistory } from "react-router-dom";
import AuthDescription from "../../authDescription";
import AuthTitle from "../../authTitle";
import Slider from "../../../setupProfile/slider";
import PinkButton from "../../../widgets/buttons.tsx/pinkButton";

const KitchenMe: React.FC = () => {
  let history = useHistory();
  const handleNext = () => {
    history.push("/setup-profile/4");
  };

  return (
    <>
      <AuthTitle>La cuisine & moi</AuthTitle>
      <div className="mt-2">
        <AuthDescription>As-tu le temps de cuisiner?</AuthDescription>
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
        <PinkButton onClick={handleNext}>Continuer</PinkButton>
      </div>
    </>
  );
};

export default KitchenMe;
