import TopInfo from "../../component/main/profile/topInfo";
import FamilyHome from "../../component/main/profile/familyHome";
import KitchenMe from "../../component/main/profile/ktchenMe";
import Budget from "../../component/main/profile/budget";

const Profile: React.FC = () => {
  return (
    <>
      <TopInfo />
      <div className="mt-10">
        <FamilyHome />
      </div>
      <div className="mt-10">
        <KitchenMe />
      </div>
      <div className="mt-10">
        <Budget />
      </div>
    </>
  );
};
export default Profile;
