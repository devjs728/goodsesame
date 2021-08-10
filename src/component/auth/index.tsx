import React, { ReactNode } from "react";

export default function Auth({ children }: { children: ReactNode }) {
  return (
    <div className="block md:flex">
      <div className="hidden md:flex flex-col bg-yellow-1 w-96 lg:w-104 h-screen px-16 pt-16 pb-8">
        <div>
          <img
            src="/assets/image/logo.png"
            alt="logo"
            className="w-28 select-none"
            draggable="false"
          />
          <p className="text-4xl font-bold mt-12">
            Planifier les meilleurs repas, pour ta santé et notre planète.
          </p>
        </div>
        <div className="flex-1 flex items-end">
          <div>
            <img
              src="/assets/image/mascotte.png"
              alt="mascotte"
              className="w-80 mx-auto mb-20 select-none"
              draggable="false"
            />
            <p>© Tous droits réservés</p>
          </div>
        </div>
      </div>
      <div className="max-w-26 mx-auto mt-20 md:mt-0 flex-1 flex justify-center items-center">
        <div className="block p-3 sm:p-0 w-full">{children}</div>
      </div>
    </div>
  );
}
