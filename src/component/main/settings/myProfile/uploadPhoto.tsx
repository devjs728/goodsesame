import { connect, useDispatch } from "react-redux";
import { openCropImageModal } from "../../../../store/modal/action";
import CropImageModal from "../../../modals/cropImageModal";
import GrayButton from "../../../widgets/buttons/grayButton";
import PinkButton2 from "../../../widgets/buttons/pinkButton2";

const UploadPhoto: React.FC<{ banner: string }> = ({ banner }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center">
      <img
        src={
          banner
            ? `${process.env.REACT_APP_BASE_URL}/${banner}`
            : "/assets/image/default_avatar.png"
        }
        alt="avatar"
        className="w-20 h-20 rounded-full"
      />
      <div className="block sm:grid grid-flow-col grid-cols-2 gap-4 ml-8">
        <PinkButton2
          className="w-full sm:w-max"
          onClick={() => {
            dispatch(openCropImageModal(true));
          }}
        >
          Ajouter une photo
        </PinkButton2>
        <GrayButton className="w-full mt-2 sm:mt-0 sm:w-max">
          Supprimer
        </GrayButton>
      </div>
      <CropImageModal />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    banner: state?.user?.banner ?? "",
  };
};

export default connect(mapStateToProps)(UploadPhoto);
