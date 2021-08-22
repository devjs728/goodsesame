import React, { ReactNode } from 'react';
import classNames from '../../../utils';

const CheckButton: React.FC<{
  id?: string;
  label: string | ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}> = ({ id, label, checked, onChange, className }) => {
  return (
    <div className={classNames('relative flex items-start', className ?? '')}>
      <div className="flex items-center h-5">
        <input
          id={id}
          aria-describedby="offers-description"
          name={id}
          type="checkbox"
          className="focus:ring-pink-400 h-4 w-4 text-pink-3 border-gray-300 rounded"
          checked={checked}
          onChange={e => {
            if (onChange) onChange(e.target.checked);
          }}
        />
      </div>
      <div className="ml-3 text-sm">
        <label
          htmlFor={id}
          className="text-sm text-gray-1 font-medium not-italic select-none"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default CheckButton;
