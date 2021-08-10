import { useState } from "react";

const ChldrenSelector: React.FC = () => {
  const lastLevel = 4;
  const [numbers, setNumbers] = useState<number>(0);

  const handleChange = (index: number) => {
    setNumbers(index === 0 && numbers === 1 ? 0 : index + 1);
  };

  return (
    <div>
      <p className="text-lg font-bold text-gray-800">Enfants</p>
      <div className="flex flex-nowrap justify-between items-center mt-2">
        {Array.from(Array(lastLevel + 1), (e, index) => {
          return (
            <img
              key={index}
              src={`/assets/image/${
                numbers > index ? "active" : "deactive"
              }_children.png`}
              alt="aldutes"
              className="w-12 h-12 sm:w-16 sm:h-16 cursor-pointer select-none"
              onClick={() => {
                handleChange(index);
              }}
              draggable="false"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChldrenSelector;
