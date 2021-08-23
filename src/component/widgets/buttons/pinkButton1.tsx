import React from "react";
import { ReactNode } from "react";
import { classNames } from "../../../utils";

const PinkButton1: React.FC<{
  children: ReactNode | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  isLoading?: boolean;
  className?: string;
}> = ({ children, onClick, isLoading, className }) => {
  return (
    <button
      type="button"
      className={classNames(
        "inline-flex justify-center items-center border border-transparent text-sm font-semibold rounded-lg shadow-sm text-white bg-pink-4 hover:bg-opacity-20 bg-opacity-15 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-200 px-2.5 py-2.5",
        className ?? ""
      )}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="ml-2">En traitement</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default PinkButton1;
