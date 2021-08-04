import React from "react";
import { ReactNode } from "react";

export default function AuthDescription({ children }: { children: ReactNode }) {
  return (
    <p className="text-center md:text-left text-normal text-gray-1 font-medium">
      {children}
    </p>
  );
}
