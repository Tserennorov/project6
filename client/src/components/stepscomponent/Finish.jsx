"use client";

import { Button } from "../sing-up login";
import { MainSection } from "./MainSection";

export const Finish = ({ continueHandler }) => {
  return (
    <div className="w-[384px]">
      <MainSection
        src={"finish.png"}
        title={"Good Job!"}
        desc={
          "Your very first account has been created. Now continue to dashboard and start tracking"
        }
      />
      <Button click={continueHandler} text={"Go to Dashboard"} />
    </div>
  );
};
