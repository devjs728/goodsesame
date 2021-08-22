import React from 'react';

export default function FormSeperator({ children }: { children: string }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center text-sm m-5">
        <span className="text-sm px-2 bg-white text-gray-500 font-medium">
          {children}
        </span>
      </div>
    </div>
  );
}
