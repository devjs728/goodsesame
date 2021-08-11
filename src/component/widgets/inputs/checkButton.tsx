import React, { ReactNode } from "react";

const CheckButton: React.FC<{
  label: string | ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}> = ({ label, checked, onChange }) => {
  return (
    <div className="relative flex items-start">
      <div className="flex items-center h-5">
        <input
          id="offers"
          aria-describedby="offers-description"
          name="offers"
          type="checkbox"
          className="focus:ring-pink-400 h-4 w-4 text-pink-3 border-gray-300 rounded"
          checked={checked}
          onChange={(e) => {
            if (onChange) onChange(e.target.checked);
          }}
        />
      </div>
      <div className="ml-3 text-sm">
        <label
          htmlFor="offers"
          className="font-medium text-gray-600 select-none"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default CheckButton;
