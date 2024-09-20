import { Blue } from "@/components/sing-up login";
import Signup from "@/components/sing-up login/Signup";
import React from "react";

const Page = () => {
  return (
    <div className="flex">
      <Signup />
      <Blue className />
    </div>
  );
};

export default Page;
