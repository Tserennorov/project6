import React from "react";

export const MainSection = ({ component, src, title, desc }) => {
  return (
    <div className="flex flex-col items-center">
      <img className="w-12 h-12 rounded-full mb-4" src={src} alt="" />
      <h1 className="font-semibold text-2xl mb-6">{title}</h1>
      {component}
      <p className="text-[#475569] text-xs mt-3 mb-8">{desc}</p>
    </div>
  );
};
