"use client";
import React from "react";

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
        <div className="w-[400px] h-[216px] rounded-xl bg-white">
          <div className="flex gap-2 items-center py-4 px-6 border-b">
            <img className="h-2 w-2" src="ellipse.png" alt="" />
            <div className="text-base font-semibold">Your income</div>
          </div>
          <div className="py-5 px-6 flex flex-col gap-4">
            <div className=" flex flex-col w-[186px] h-[72px] gap-1">
              <div className="text-4xl text-#000000">1,200000$</div>
              <div className="text-base ">Your Income Amount</div>
            </div>
            <div className="flex gap-2 items-center">
              <img className="w-6 h-6" src="deeshee.png" alt="" />
              <div>32% from last month</div>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[216px] rounded-xl bg-white">
          <div className="flex gap-2 items-center py-4 px-6 border-b">
            <img className="h-2 w-2" src="tsellipse.png" alt="" />
            <div className="text-base font-semibold">Total expenses</div>
          </div>
          <div className="py-5 px-6 flex flex-col gap-4">
            <div className=" flex flex-col w-[186px] h-[72px] gap-1">
              <div className="text-4xl text-#000000">-1,200000$</div>
              <div className="text-base ">Your Income Amount</div>
            </div>
            <div className="flex gap-2 items-center">
              <img className="w-6 h-6" src="dooshoo.png" alt="" />
              <div>32% from last month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
