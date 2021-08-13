import { TrashIcon } from "@heroicons/react/solid";
import { useCallback, useEffect, useState } from "react";
import { getIngredient, Ingredient } from "../../../api/ingredient";
import { cancelRequest } from "../../../utils/request";
import PinkButton from "../../widgets/buttons/pinkButton";
import CheckButton from "../../widgets/inputs/checkButton";
import SearchInput from "../../widgets/inputs/searchInput";
import SelectNumber from "../../widgets/selectNumber";
import Text1 from "../../widgets/texts/text1";
import Title1 from "../../widgets/texts/title1";
import Title2 from "../../widgets/texts/title2";
import Title3 from "../../widgets/texts/title3";

const PlanMyMeals: React.FC = () => {
  const [searchKey, setSearchKey] = useState<string>("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [selectedIngredients, selectIngredient] = useState<Ingredient[]>([]);

  useEffect(() => {
    if (!searchKey || searchKey.length < 3) {
      return;
    }

    let id = setTimeout(() => {
      getIngredient(searchKey).then((list) => {
        let newItems: Ingredient[] = [];
        list.forEach((item) => {
          if (!ingredients.filter(({ id }) => id === item.id).length) {
            newItems.push(item);
          }
        });
        setIngredients([...newItems, ...ingredients]);
      });
    }, 300);

    return () => {
      cancelRequest();
      clearTimeout(id);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchKey]);

  const removeIngredient = useCallback(
    (targetId: number) => {
      setIngredients(ingredients.filter(({ id }) => id !== targetId));
      selectIngredient(selectedIngredients.filter(({ id }) => id !== targetId));
    },
    [ingredients, selectedIngredients]
  );

  const selectIngreident = useCallback(
    (targetId: number, checked: boolean) => {
      console.log(checked);
      if (checked) {
        const ingredient = ingredients.find(({ id }) => id === targetId);
        if (!ingredient) {
          return;
        }
        selectIngredient([...selectedIngredients, { ...ingredient }]);
      } else {
        selectIngredient(
          selectedIngredients.filter(({ id }) => id !== targetId)
        );
      }
    },
    [ingredients, selectedIngredients]
  );

  const handleSubmit = useCallback(() => {
    console.log(selectedIngredients);
  }, [selectedIngredients]);

  return (
    <>
      <div className="bg-yellow-1 flex justify-between items-center rounded-md">
        <div className="pl-12">
          <Title1>Le menu parfait</Title1>
          <p className="text-black opacity-60 text-base font-medium mt-4">
            Préparons ensemble de délicieux menus équilibrés<br></br>et
            éco-friendly, tout en respectant votre budget !
          </p>
        </div>
        <img
          src="/assets/image/glasses_mascotte.png"
          alt="mascotte"
          className="h-44"
        />
      </div>
      <div className="mt-10">
        <Title2>Planifier mes repas</Title2>
        <Text1 className="mt-3">Combien de plats souhaites-tu préparer ?</Text1>
        <SelectNumber className="mt-5" />
      </div>
      <CheckButton
        className="mt-5"
        id="ingredients"
        label="Je veux utiliser des ingrédients que j’ai déjà"
      />
      <div className="mt-8">
        <Title3>
          ANTI-GASPI: Je veux utiliser des ingrédients de mon frigo
        </Title3>
        <SearchInput
          value={searchKey}
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
        />
        <div className="mt-6">
          {ingredients.map(({ id, name }) => (
            <div
              key={id}
              className="flex justify-between items-center p-3 border border-gray-200 rounded-lg my-3"
            >
              <CheckButton
                id={id.toString()}
                label={name}
                onChange={(checked) => {
                  selectIngreident(id, checked);
                }}
              />
              <TrashIcon
                className="text-pink-4 w-5 hover:text-pink-800 cursor-pointer transition-color"
                onClick={() => removeIngredient(id)}
              />
            </div>
          ))}
        </div>
        <PinkButton className="w-max px-5 py-2.5 my-3" onClick={handleSubmit}>
          Dépasser
        </PinkButton>
      </div>
    </>
  );
};

export default PlanMyMeals;
