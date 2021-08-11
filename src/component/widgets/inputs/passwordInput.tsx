import React, { useState } from "react";

export default function PasswordInput({
  label,
  placeholder,
  value,
  onChange,
  error,
}: {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}) {
  const [type, setType] = useState("password");
  return (
    <div>
      {label && <p className="text-base text-gray-900 font-bold">{label}</p>}
      <div className="mt-2.5 relative flex items-center">
        <input
          type={type}
          autoComplete="current-password"
          placeholder={placeholder}
          className="py-3 pl-4 pr-10 block w-full bg-gray-150 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-300 border-gray-50 focus:border-gray-50 rounded-lg text-sm"
          value={value}
          onChange={onChange}
        />
        <div
          className="absolute right-3 cursor-pointer"
          onClick={() => {
            setType(type === "password" ? "text" : "password");
          }}
        >
          <img
            src={`./assets/image/eye_${
              type === "password" ? "show" : "hide"
            }.png`}
            alt="eye"
            className="w-5 "
          />
        </div>
      </div>
      {error && <p className="mt-1 text-sm text-pink-1">{error}</p>}
    </div>
  );
}
