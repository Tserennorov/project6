"use client";

import { Button, Inputg } from "../sing-up login";
import { MainSection } from "./MainSection";
import { Select } from "./Select";

export const Balance = ({ continueHandler, handleChange }) => {
  return (
    <div className="w-[384px]">
      <MainSection
        src={"currency.png"}
        title={"Select base currency"}
        component={<Select />}
        desc={
          "Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one "
        }
      />

      <Button click={continueHandler} text={"Confirm"} />
    </div>
  );
};
