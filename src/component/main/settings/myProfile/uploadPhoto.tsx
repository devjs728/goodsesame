import { connect } from "react-redux";
import GrayButton from "../../../widgets/buttons/grayButton";
import PinkButton2 from "../../../widgets/buttons/pinkButton2";

const UploadPhoto: React.FC<{ firstName: string; lastName: string }> = ({
  firstName,
  lastName,
}) => {
  return (
    <div className="flex items-center">
      <img
        src="/assets/image/default_avatar.png"
        alt="avatar"
        className="w-20 h-20 rounded-full"
      />
      <div className="block sm:grid grid-flow-col grid-cols-2 gap-4 ml-8">
        <PinkButton2 className="w-full sm:w-max">Ajouter une photo</PinkButton2>
        <GrayButton className="w-full mt-2 sm:mt-0 sm:w-max">
          Supprimer
        </GrayButton>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    firstName: state?.user?.info?.firstname ?? "",
    lastName: state?.user?.info?.lastname ?? "",
  };
};

export default connect(mapStateToProps)(UploadPhoto);
