import { useState } from "react";

const initItems = [
  { name: "Lait de vache", imgSrc: "milk", active: false },
  { name: "Porc", imgSrc: "porc", active: false },
  { name: "Oeufs", imgSrc: "egg", active: false },
  { name: "Viande", imgSrc: "viande", active: false },
  { name: "Gluten", imgSrc: "gluten", active: false },
  { name: "Sucre ajouté", imgSrc: "sugar", active: false },
  { name: "Prod. animaux", imgSrc: "rabbit", active: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const PreferencesSelector: React.FC = () => {
  const [items, setItems] = useState(initItems);

  const handleActive = (selectedName: string) => {
    const newItems = items.map((item) => {
      const { name } = item;
      if (name === selectedName) {
        item.active = !item.active;
      }
      return item;
    });

    setItems(newItems);
  };

  return (
    <div className="grid grid-flow-col grid-cols-3 grid-rows-3 sm:grid-cols-4 sm:grid-rows-2 gap-x-2 gap-y-6 place-items-center">
      {items.map(({ name, imgSrc, active }) => (
        <div key={name} className="text-center max-w-max">
          <img
            src={`/assets/image/${imgSrc}.png`}
            alt="allergy"
            className={classNames(
              active
                ? "border-red-300"
                : "border-transparent hover:border-gray-200",
              "w-16 h-16 mx-auto transition-colors duration-100 rounded-lg border-2 cursor-pointer"
            )}
            onClick={() => {
              handleActive(name);
            }}
          />
          <p className="mt-2 text-gray-700 text-xs font-semibold">{name}</p>
        </div>
      ))}
    </div>
  );
};

export default PreferencesSelector;
