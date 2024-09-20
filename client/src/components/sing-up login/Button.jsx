import React from "react";

export const Button = ({ login, click, signup }) => {
  return (
    <div
      onClick={click}
      className="w-[384px] btn h-[48px] bg-blue-700 rounded-3xl flex items-center justify-center font-normal text-xl text-white"
    >
      {login}
      {signup}
    </div>
  );
};
