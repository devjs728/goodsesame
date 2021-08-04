import React from "react";

export default function NormalInput({
  label,
  type,
  autoComplete,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  type: string;
  autoComplete: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div>
      <p className="text-base text-gray-900 font-bold">{label}</p>
      <input
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="py-3 px-4 block w-full bg-gray-150 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-300 border-gray-50 focus:border-gray-50 rounded-lg text-sm mt-2.5"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
