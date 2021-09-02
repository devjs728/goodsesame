import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { editProfile } from "../../../store/user/action";
import Slider from "../../setupProfile/slider";
import PinkButton2 from "../../widgets/buttons/pinkButton2";
import Title2 from "../../widgets/texts/title2";

const Budget: React.FC<{ initBudget: number }> = ({ initBudget }) => {
  const dispatch = useDispatch();
  const [budget, setBudget] = useState<number>(initBudget);
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      await dispatch(editProfile({ budget }));
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
          label="Quel budget souhaites-tu accorder à chaque repas ?"
          imageName="currency"
          levels={["Maxi", "Maxi", "Maxi"]}
          value={budget}
          onChange={(val) => {
            setBudget(val);
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
    initBudget: state?.user?.budget ?? 0,
  };
};

export default connect(mapStateToProps)(Budget);
