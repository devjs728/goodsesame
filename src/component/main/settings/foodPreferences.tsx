import { XCircleIcon } from "@heroicons/react/solid";
import PreferencesSelector from "../../setupProfile/preferencesSelector";
import PinkButton2 from "../../widgets/buttons/pinkButton2";
import SearchInput from "../../widgets/inputs/searchInput";
import Title2 from "../../widgets/texts/title2";
import Title3 from "../../widgets/texts/title3";

const FoodPreferences: React.FC = () => {
  return (
    <>
      <Title2>Je ne veux pas manger...</Title2>
      <div className="flex items-cetner mt-6">
        <div className="px-2 py-1.5 rounded-md bg-gray-150 flex justify-between items-center">
          <p className="text-gray-2 text-xs font-bold">Roquefort</p>
          <XCircleIcon className=" ml-2 text-gray-1 hover:text-red-500 cursor-pointer w-4 h-4" />
        </div>
      </div>
      <div className="mt-14">
        <Title3>Préférences</Title3>
        <div>
          <PreferencesSelector />
        </div>
      </div>
      <div className="mt-14">
        <Title3>Aliments particuliers</Title3>
        <SearchInput />
        <div className="flex items-cetner mt-6">
          <div className="px-2 py-1.5 rounded-md bg-gray-150 flex justify-between items-center">
            <p className="text-gray-2 text-xs font-medium">Roquefort</p>
            <XCircleIcon className=" ml-2 text-gray-1 hover:text-red-500 cursor-pointer w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <PinkButton2>Sauvegarder</PinkButton2>
      </div>
    </>
  );
};

export default FoodPreferences;
