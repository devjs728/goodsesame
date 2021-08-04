import React from "react";

export default function CheckButton({ label }: { label: string }) {
  return (
    <div className="relative flex items-start">
      <div className="flex items-center h-5">
        <input
          id="offers"
          aria-describedby="offers-description"
          name="offers"
          type="checkbox"
          className="focus:ring-pink-400 h-4 w-4 text-pink-1 border-gray-300 rounded"
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor="offers" className="font-medium text-gray-600">
          {label}
        </label>
      </div>
    </div>
  );
}
