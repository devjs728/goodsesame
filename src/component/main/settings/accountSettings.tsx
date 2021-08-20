import PinkButton2 from "../../widgets/buttons/pinkButton2";
import Title2 from "../../widgets/texts/title2";

const AccountSettings: React.FC = () => {
  return (
    <>
      <Title2>Mes comptes liés</Title2>
      <div className="mt-8">
        <PinkButton2>Sauvegarder</PinkButton2>
      </div>
    </>
  );
};

export default AccountSettings;
