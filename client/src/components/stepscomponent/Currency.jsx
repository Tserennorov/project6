"use client";

import axios from "axios";
import { Button, Inputg } from "../sing-up login";
import { MainSection } from "./MainSection";
import { useState } from "react";

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
        src={"balance.png"}
        title={"Set up your cash Currency"}
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

      <Button click={currencyHandler} text={"Confirm"} />
    </div>
  );
};
