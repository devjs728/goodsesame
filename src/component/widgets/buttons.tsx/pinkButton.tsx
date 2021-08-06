import React from "react";
import { ReactNode } from "react";

const PinkButton: React.FC<{
  children: ReactNode | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}> = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="w-full inline-flex justify-center items-center px-2.5 py-3 border border-transparent text-sm font-semibold rounded-lg shadow-sm text-white bg-pink-1 hover:bg-pink-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PinkButton;
