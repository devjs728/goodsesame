import React from 'react';

const AdultsSelector: React.FC<{
  maxValue: number;
  value: number;
  onChange: (value: number) => void;
}> = ({ maxValue, value, onChange }) => {
  const handleChange = (index: number) => {
    if (onChange) {
      onChange(index === 0 && value === 1 ? 0 : index + 1);
    }
  };

  return (
    <div>
      <p className="text-lg font-bold text-gray-800">Adultes</p>
      <div className="flex flex-nowrap justify-between items-center mt-2">
        {Array.from(Array(maxValue + 1), (e, index) => {
          return (
            <div
              role="button"
              tabIndex={index}
              onClick={() => handleChange(index)}
              onKeyUp={() => handleChange(index)}
            >
              <img
                key={index}
                src={`/assets/image/${
                  value > index ? 'active' : 'deactive'
                }_adult.png`}
                alt="aldutes"
                className="w-12 h-12 sm:w-16 sm:h-16 cursor-pointer select-none"
                draggable="false"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdultsSelector;
