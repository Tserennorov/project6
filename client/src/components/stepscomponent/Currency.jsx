"use client";

import axios from "axios";
import { Button } from "../sing-up login";
import { MainSection } from "./MainSection";
import { useState } from "react";
import { Select } from "./Select";

export const Currency = () => {
  const [currency, setCurrency] = useState();

  const handleChange = (event) => {
    const { value } = event.target;
    setCurrency(value);
  };

  const currencyHandler = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.post(
      "http://localhost:8000/api/user/currency",
      { currency },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response);
  };
  return (
    <div className="w-[384px]">
      <MainSection
        src={"currency.png"}
        title={"Select base currency"}
        component={<Select handleChange={handleChange} />}
        desc={
          "Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one "
        }
      />
      <Button click={currencyHandler} text={"Confirm"} />
    </div>
  );
};
