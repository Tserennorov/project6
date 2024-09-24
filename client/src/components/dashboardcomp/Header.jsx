"use client";
import React from "react";

export const Header = () => {
  return (
    <div className="flex w-[1440px] h-[72px] justify-between items-center mx-auto">
      <div className="flex gap-6">
        <img src="./image.png" alt="" />
        <p className="text-base font-semibold">Dashboard</p>
        <p>Records</p>
      </div>
      <div className="flex items-center gap-6 ">
        <div className="badge badge-primary bg-blue-700 w-[100px] h-[40px] ">
          + record
        </div>
        <img className="w-[40px]" src="./profile.png" alt="" />
      </div>
    </div>
  );
};
