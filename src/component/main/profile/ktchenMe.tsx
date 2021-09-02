import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { editProfile } from "../../../store/user/action";
import Slider from "../../setupProfile/slider";
import PinkButton2 from "../../widgets/buttons/pinkButton2";
import Title2 from "../../widgets/texts/title2";

const KitchenMe: React.FC<{ availableTime: number; cookingLevel: number }> = ({
  availableTime,
  cookingLevel,
}) => {
  const dispatch = useDispatch();
  const [time, setTime] = useState<number>(availableTime);
  const [level, setLevel] = useState<number>(cookingLevel);
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      await dispatch(
        editProfile({ time_available: time, cooking_level: level })
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Title2>La cuisine & moi</Title2>
      <div className="block sm:grid grid-flow-col grid-cols-2 gap-20 mt-5">
        <Slider
          label="As-tu le temps de cuisiner?"
          imageName="clock"
          levels={["Moyen", "Moyen", "Moyen"]}
          value={time}
          onChange={(val) => {
            setTime(val);
          }}
        />
        <Slider
          label=" Quel est ton degré de maîtrise des fourneaux ?"
          imageName="chef_hat"
          levels={["Débutant", "Débutant", "Débutant"]}
          value={level}
          onChange={(val) => {
            setLevel(val);
          }}
        />
      </div>
      <PinkButton2
        className="mt-8 px-2.5 py-2 w-max"
        onClick={onSubmit}
        isLoading={isLoading}
      >
        Sauvegarder
      </PinkButton2>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    availableTime: state?.user?.time_available ?? 0,
    cookingLevel: state?.user?.cooking_level ?? 0,
  };
};

export default connect(mapStateToProps)(KitchenMe);
