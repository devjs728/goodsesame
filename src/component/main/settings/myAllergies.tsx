import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AllergiesSelector from "../../setupProfile/allergiesSelector";
import PinkButton2 from "../../widgets/buttons/pinkButton2";
import Title2 from "../../widgets/texts/title2";

const MyAllergies: React.FC<{ allergies: [] }> = ({ allergies }) => {
  return (
    <>
      <Title2>Je ne peux pas manger...</Title2>
      <div className="mt-2">
        <div>
          <AllergiesSelector />
        </div>
      </div>
      <div className="mt-14">
        <p className="text-gray-2 font-medium">
          Ton allergie n’est pas listée?
          <Link to="#" className="ml-2 text-pink-2">
            Dis-le-nous
          </Link>
        </p>
      </div>
      <div className="mt-8">
        <PinkButton2>Sauvegarder</PinkButton2>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    allergies: state?.user?.filters ?? [],
  };
};

export default connect(mapStateToProps)(MyAllergies);
