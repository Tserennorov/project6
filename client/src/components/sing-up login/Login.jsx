"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button, Donthaveacoount, Inputg, Logo, Welcomeback } from ".";
import { useUser } from "@/provider/AncestorProvider";
const Login = () => {
  const { loginhandler, isLoggedIn, Loading } = useUser();
  const [arr, setArr] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { push } = useRouter();
  const title = "Welcome back";
  const description = "Welcome back, Please enter your details.";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setArr({ ...arr, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = arr;
    if (!email || !password) {
      setError("Invalid inputs");
      return;
    }
    try {
      await loginhandler(email, password);
      push("/");
    } catch (error) {
      serError(error.message);
    }

    console.log("success");
  };

  if (isLoggedIn) {
    push("/");
  }

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-6/12 flex items-center justify-center flex-col gap-10">
      <Logo />
      <Welcomeback title={title} description={description} />
      <div className="flex flex-col gap-4">
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
        <Button click={handleSubmit} login={"Log in"} />
      </div>
      <Donthaveacoount
        title={"Don't have an account?"}
        description={"Sign up"}
        href={"/signup"}
      />
    </div>
  );
};

export default Login;
