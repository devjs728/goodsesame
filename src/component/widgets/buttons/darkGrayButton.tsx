import React, { ReactNode } from 'react';

const DarkGrayButton: React.FC<{
  children: ReactNode | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}> = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="w-full inline-flex justify-center items-center px-5 py-3 border border-transparent text-sm font-semibold rounded-lg shadow-sm text-gray-100 bg-gray-1 hover:bg-gray-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-1 "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default DarkGrayButton;
