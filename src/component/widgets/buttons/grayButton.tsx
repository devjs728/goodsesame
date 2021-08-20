import React from "react";
import { ReactNode } from "react";
import { classNames } from "../../../utils";

const GrayButton: React.FC<{
  children: ReactNode | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
}> = ({ children, onClick, className }) => {
  return (
    <button
      type="button"
      className={classNames(
        className ?? "",
        "inline-flex justify-center items-center px-5 py-3 border border-transparent text-sm font-semibold rounded-lg shadow-sm text-gray-2 bg-gray-150 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 "
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GrayButton;
