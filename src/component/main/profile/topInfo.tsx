import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import GrayButton from "../../widgets/buttons/grayButton";
import PinkButton1 from "../../widgets/buttons/pinkButton1";
import Title2 from "../../widgets/texts/title2";

const TopInfo: React.FC<{ firstName: string; lastName: string }> = ({
  firstName,
  lastName,
}) => {
  const history = useHistory();
  return (
    <>
      <div className="flex justify-center items-center">
        <img
          src="/assets/image/default_avatar.png"
          alt="avatar"
          className="w-32 h-32 rounded-full"
        />
        <div className="ml-10">
          <Title2>{`${firstName} ${lastName}`}</Title2>
          <div className="flex items-center mt-6">
            <GrayButton
              onClick={() => {
                history.push("/settings");
              }}
            >
              Paramètres de profil
            </GrayButton>
            <PinkButton1 className="w-max px-3 py-3 ml-4 text-center">
              <img
                src="/assets/image/logout.png"
                alt="logout"
                className="w-5 h-5"
              />
            </PinkButton1>
          </div>
        </div>
      </div>
      <div className="block sm:grid grid-flow-col grid-cols-3 gap-5 mt-10 text-white text-base font-bold">
        <div className="bg-green-1 rounded-lg flex justify-between items-center px-3.5 py-2.5">
          <div className="flex items-center">
            <img src="/assets/image/par_sesame.png" alt="par_sesame" />
            <p className="ml-3">Par Sésame</p>
          </div>
          <p className="bg-white bg-opacity-15 px-2.5 py-1 rounded-lg text-sm">
            2
          </p>
        </div>
        <div className="bg-orange-1 rounded-lg flex justify-between items-center px-3.5 py-2.5">
          <div className="flex items-center">
            <img src="/assets/image/cuisson.png" alt="cuisson" />
            <p className="ml-3">Cuisson</p>
          </div>
          <p className="bg-white bg-opacity-15 px-2.5 py-1 rounded-lg text-sm">
            ++
          </p>
        </div>
        <div className="bg-pink-4 rounded-lg flex justify-between items-center px-3.5 py-2.5">
          <div className="flex items-center">
            <img src="/assets/image/difficult.png" alt="difficult" />
            <p className="ml-3">Difficulté</p>
          </div>
          <p className="bg-white bg-opacity-15 px-2.5 py-1 rounded-lg text-sm">
            €€€
          </p>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    firstName: state?.user?.firstname ?? "",
    lastName: state?.user?.lastname ?? "",
  };
};

export default connect(mapStateToProps)(TopInfo);
