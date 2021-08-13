import { MinusIcon, PlusIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { classNames } from "../../utils";

const SelectNumber: React.FC<{
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}> = ({ className, value, onChange }) => {
  const [val, setVal] = useState<number>(value ? parseInt(value) : 1);

  const increase = () => {
    if (val > 1) {
      const updatedVal = val - 1;
      setVal(updatedVal);
      if (onChange) {
        onChange(updatedVal.toString());
      }
    }
  };

  const decrease = () => {
    const updatedVal = val + 1;
    setVal(updatedVal);
    if (onChange) {
      onChange(updatedVal.toString());
    }
  };

  return (
    <div
      className={classNames(
        "flex justify-center items-center px-3 py-2 w-max border border-gray-300 rounded-md",
        className ? className : ""
      )}
    >
      <MinusIcon
        className="w-4 text-gray-800 cursor-pointer hover:shadow select-none"
        onClick={increase}
      />
      <p className="px-5 text-normal font-medium text-gray-700">{val}</p>
      <PlusIcon
        className="w-4 text-gray-800 cursor-pointer hover:shadow select-none"
        onClick={decrease}
      />
    </div>
  );
};

export default SelectNumber;
