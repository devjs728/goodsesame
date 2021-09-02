import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { editProfile } from "../../../store/user/action";
import AdultsSelector from "../../setupProfile/adultsSelector";
import ChildrenSelector from "../../setupProfile/childrenSelector";
import PinkButton2 from "../../widgets/buttons/pinkButton2";
import CheckButton from "../../widgets/inputs/checkButton";
import Title2 from "../../widgets/texts/title2";

const FamilyHome: React.FC<{ initAdult: number; initChild: number }> = ({
  initAdult,
  initChild,
}) => {
  const dispatch = useDispatch();
  const [adult, setAdult] = useState<number>(initAdult);
  const [child, setChild] = useState<number>(initChild);
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    try {
      setLoading(true);
      await dispatch(editProfile({ adult, child }));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Title2>Foyer familial</Title2>
      <div className="block sm:grid grid-flow-col grid-cols-2 gap-20 mt-5">
        <AdultsSelector
          maxValue={4}
          value={adult}
          onChange={(value) => {
            setAdult(value === 0 ? 1 : value);
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
            setChild(checked ? 0 : 1);
          }}
        />
      </div>
      <PinkButton2
        className="mt-8 px-2.5 py-2 w-max"
        isLoading={isLoading}
        disabled={isLoading}
        onClick={onSubmit}
      >
        Sauvegarder
      </PinkButton2>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    initAdult: state?.user?.family_members?.adult ?? 1,
    initChild: state?.user?.family_members?.child ?? 0,
  };
};

export default connect(mapStateToProps)(FamilyHome);
