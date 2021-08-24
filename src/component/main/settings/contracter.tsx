import PinkButton2 from "../../widgets/buttons/pinkButton2";
import Text1 from "../../widgets/texts/text1";
import Title2 from "../../widgets/texts/title2";

const Contracter: React.FC = () => {
  return (
    <>
      <Title2>Envoie-nous du love</Title2>
      <Text1 className="mt-2">
        Un bug à signalier? Envie de rallier le mouvement?
      </Text1>
      <div>
        <PinkButton2>Chat</PinkButton2>
      </div>
    </>
  );
};

export default Contracter;
