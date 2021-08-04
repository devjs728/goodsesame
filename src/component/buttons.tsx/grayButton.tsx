import React from "react";
import { ReactNode } from "react";

export default function GrayButton({
  children,
}: {
  children: string | ReactNode;
}) {
  return (
    <button
      type="button"
      className="max-w-max inline-flex justify-center items-center px-5 py-3 border border-transparent text-sm font-semibold rounded-lg shadow-sm text-gray-800 bg-gray-150 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 "
    >
      {children}
    </button>
  );
}
