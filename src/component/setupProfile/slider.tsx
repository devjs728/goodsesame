import React, { MouseEventHandler, ReactElement, useState } from "react";
import { classNames } from "../../utils";

const Bar: React.FC<{
  className?: string;
  imageName: string;
  index: number;
  level: number;
  name: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}> = ({ className, imageName, index, level, name, onClick }) => {
  return (
    <div
      className="w-full relative flex items-center justify-center cursor-pointer py-5"
      onClick={onClick}
    >
      <div
        className={classNames(
          index <= level ? "bg-purple-1" : "bg-gray-200",
          `w-full h-1.2 rounded-md transition-all ${className ?? ""}`
        )}
      />
      {index === level && <Tooltip name={name} imageName={imageName} />}
    </div>
  );
};

const Tooltip: React.FC<{ imageName: string; name: string }> = ({
  imageName,
  name,
}) => {
  return (
    <div className="absolute cursor-pointer p-1 bg-white rounded-full">
      <div className="p-1.5 bg-purple-1 rounded-full relative flex justify-center w-6 h-6">
        <img
          src={`/assets/image/range_slider/${imageName}.png`}
          alt="tooltip"
          // className="w-4 h-4"
          draggable="false"
        />
        <p className="absolute bottom-10 bg-gray-200 p-2 rounded-md text-sm text-gray-700 font-medium sm:whitespace-nowrap">
          {name}
        </p>
      </div>
    </div>
  );
};

const Slider: React.FC<{
  label?: string | ReactElement;
  imageName: string;
  levels: string[];
}> = ({ label, imageName, levels }) => {
  const [level, setLevel] = useState(0);

  return (
    <>
      {label && <p className="text-gray-800 font-bold text-lg">{label}</p>}
      <div className="mt-16 sm:mt-14 grid grid-flow-col grid-cols-3 gap-2 relative place-items-center">
        {levels.map((name, index) => (
          <Bar
            imageName={imageName}
            key={index}
            index={index}
            level={level}
            name={name}
            onClick={() => {
              setLevel(index);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Slider;
