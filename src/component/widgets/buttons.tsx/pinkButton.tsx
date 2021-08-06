import React from "react";
import { ReactNode } from "react";

export default function PinkButton({
  children,
}: {
  children: string | ReactNode;
}) {
  return (
    <button
      type="button"
      className="w-full inline-flex justify-center items-center px-2.5 py-3 border border-transparent text-sm font-semibold rounded-lg shadow-sm text-white bg-pink-1 hover:bg-pink-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-2"
    >
      {children}
    </button>
  );
}
