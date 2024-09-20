"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import axios from "axios";
import { Button, Donthaveacoount, Inputg, Logo, Welcomeback } from ".";

const Signup = () => {
  const [userDetail, setUserDetail] = useState({
    email: "",
    username: "",
    password: "",
    passwordRepeat: "",
  });

  const [error, setError] = useState("");
  const { push } = useRouter();
  const title = "Create Geld account";
  const description = "Sign up below to create your Wallet account";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { passwordRepeat, ...rest } = userDetail;

    if (userDetail.password !== userDetail.passwordRepeat) {
      setError("Passwords do not match");
      return;
    }

    try {
      console.log({ rest });
      const result = await axios.post(
        "http://localhost:8000/api/user/signup",
        rest
      );

      console.log(result);

      push("/login");
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <div className="w-6/12 flex items-center justify-center flex-col gap-10">
      <Logo />
      <Welcomeback title={title} description={description} />
      <div className="flex flex-col gap-4 " onSubmit={handleSubmit}>
        <Inputg
          onchange={handleChange}
          name={"username"}
          placeholder={"Username"}
          type="text"
        />
        <Inputg
          onchange={handleChange}
          name={"email"}
          placeholder={"Email"}
          type="email"
        />
        <Inputg
          onchange={handleChange}
          name={"password"}
          placeholder={"Password"}
          type="password"
        />
        <Inputg
          onchange={handleChange}
          name={"passwordRepeat"}
          placeholder={"Password repeat"}
          type="password"
        />
        <Button signup={"Sign up"} click={handleSubmit} />
      </div>
      {error && <div className="text-red-500">{error}</div>}
      <Donthaveacoount
        title={"Already have an account?"}
        description={"Log in"}
        href={"/"}
      />
    </div>
  );
};

export default Signup;
