"use client";

import { Button, Inputg } from "../sing-up login";
import { MainSection } from "./MainSection";

export const Currency = ({ continueHandler, handleChange }) => {
  return (
    <div className="w-[384px]">
      <MainSection
        src={"balance.png"}
        title={"Set up your cash Balance"}
        component={
          <Inputg
            onchange={handleChange}
            name={"balance"}
            placeholder={"balance"}
            type={"text"}
          />
        }
        desc={"How much cash do you have in your wallet?"}
      />

      <Button click={continueHandler} text={"Confirm"} />
    </div>
  );
};
