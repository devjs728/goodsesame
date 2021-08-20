import ChangePassword from "./changePassword";
import PersonalInfo from "./personalInfo";
import UploadPhoto from "./uploadPhoto";
const MyProfile: React.FC = () => {
  return (
    <>
      <UploadPhoto />
      <div className="mt-5">
        <PersonalInfo />
      </div>
      <div className="mt-16">
        <ChangePassword />
      </div>
    </>
  );
};

export default MyProfile;
