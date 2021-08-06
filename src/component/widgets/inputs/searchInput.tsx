import { SearchIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

export default function SearchInput({
  label,
  placeholder,
  value,
  type,
  onChange,
}: {
  label?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div>
      {label && <p className="text-base text-gray-900 font-bold">{label}</p>}
      <div className="mt-2.5 relative flex items-center">
        <input
          type={type}
          autoComplete="current-password"
          placeholder={placeholder}
          className="py-3 pl-10 pr-4 block w-full bg-gray-150 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-300 border-gray-50 focus:border-gray-50 rounded-lg text-sm"
          value={value}
          onChange={onChange}
        />
        <div className="absolute left-3 cursor-pointer">
          <SearchIcon className="text-gray-400 w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
