import PinkButton2 from "../../widgets/buttons/pinkButton2";
import IndigoButton2 from "../../widgets/buttons/indigoButton2";
import Text1 from "../../widgets/texts/text1";
import Title2 from "../../widgets/texts/title2";

const Contracter: React.FC = () => {
  return (
    <>
      <Title2>Envoie-nous du love</Title2>
      <Text1 className="mt-6">
        Un bug à signalier? Envie de rallier le mouvement?
      </Text1>
      <div className="flex items-center mt-6">
        <PinkButton2 className="pl-1 pr-4 pt-1 pb-1">
          <div className="bg-white p-2 rounded-md">
            <img src="/assets/image/chat.png" alt="chat" className="w-5" />
          </div>
          <span className="ml-4">Chat</span>
        </PinkButton2>
        <IndigoButton2 className="ml-4 pl-1 pr-4 pt-1 pb-1">
          <div className="bg-white p-2 rounded-md">
            <img src="/assets/image/discord.png" alt="chat" className="w-5" />
          </div>
          <span className="ml-4">Discord</span>
        </IndigoButton2>
      </div>
      <div className="mt-16">
        <Title2>Tu es blogueur food?</Title2>
        <Text1>Tu veux nous soutenir?</Text1>
        <Text1>
          Nous avons créé une adresse rien que pour toi:{" "}
          <span className="text-pink-3 hover:text-pink-2 cursor-pointer ml-2">
            chefs@goodsesame.com
          </span>
        </Text1>
      </div>
      <div className="mt-16 flex justify-between items-center bg-yellow-1 rounded-md">
        <div className="ml-10">
          <Title2 className="flex items-center">
            <span>Fait avec</span>
            <img
              src="/assets/image/heart.png"
              alt="mascotte"
              className="h-6 mx-3"
            />
            <span>à Paris</span>
          </Title2>
          <Text1>Version de l’app: 1.0.8</Text1>
        </div>
        <img
          src="/assets/image/mascotte1.png"
          alt="mascotte"
          className="h-32"
        />
      </div>
    </>
  );
};

export default Contracter;
