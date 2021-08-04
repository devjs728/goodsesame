import React from "react";

export default function AuthTitle({ children }: { children: string }) {
  return (
    <p className="text-center md:text-left text-2xl text-gray-900 font-bold">
      {children}
    </p>
  );
}
