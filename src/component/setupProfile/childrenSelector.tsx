const ChldrenSelector: React.FC<{
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
      <p className="text-lg font-bold text-gray-800">Enfants</p>
      <div className="flex flex-nowrap justify-between items-center mt-2">
        {Array.from(Array(maxValue + 1), (e, index) => {
          return (
            <img
              key={index}
              src={`/assets/image/${
                value > index ? "active" : "deactive"
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
