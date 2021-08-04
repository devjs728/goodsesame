import React from "react";

export default function SocialButton({
  imgSrc,
  color,
  children,
}: {
  imgSrc: string;
  color: string;
  children: string;
}) {
  return (
    <button
      type="button"
      className="max-w-max lg:max-w-full mx-auto lg:w-34 inline-flex items-center p-1.5 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
      style={{ backgroundColor: color }}
    >
      <img src={imgSrc} alt="socialImage" className="w-8 h-8" />
      <p className="hidden lg:block text-gray-100 text-sm font-semibold ml-3">
        {children}
      </p>
    </button>
  );
}
