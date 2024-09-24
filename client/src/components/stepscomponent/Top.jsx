import React from "react";

export const Top = ({ step }) => {
  return (
    <div className="w-[240px] flex flex-col gap-12 items-center ">
      <img className="w-[107.5px] h-10" src="Frame 3.png" alt="logo" />

      <ul class="steps w-full">
        <li class="step step-primary">Currency</li>
        <li class={`step ${step >= 1 && "step-primary"}`}>Balance</li>
        <li class={`step ${step >= 2 && "step-primary"}`}>Finish</li>
      </ul>
    </div>
  );
};
