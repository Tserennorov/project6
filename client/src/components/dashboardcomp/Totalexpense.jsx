import React from "react";
import { Yourincome } from "./Yourincome";

export const Totalexpense = () => {
  return (
    <div className="max-w-screen  bg-slate-200">
      <div className="flex w-[1440px] justify-between mx-auto">
        <div className="relative">
          <img
            className="w-[400px] h-[216px] rounded-xl"
            src="/creditcard.png"
            alt=""
          />
          <img
            className="absolute top-7 left-5 w-[80px] h-[30px]"
            src="geld.png"
            alt=""
          />
          <div className="flex flex-col gap-3">
            <p className="absolute text-white bottom-14 left-6 opacity-50">
              Cash
            </p>
            <p className="absolute text-white bottom-7 left-6 text-2xl">
              10000000
            </p>
          </div>
        </div>
        <Yourincome />
        <Yourincome />
      </div>
    </div>
  );
};
