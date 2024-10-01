"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button, Donthaveacoount, Inputg, Logo, Welcomeback } from ".";
import { Loading } from "../Loading";
import { useUserContext } from "@/provider/AncestorProvider";

const Login = () => {
  const { loginHandler, isLoggedIn } = useUserContext();
  const [arr, setArr] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const { push } = useRouter();
  const title = "Welcome back";
  const description = "Welcome back, Please enter your details.";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setArr((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    try {
      await loginHandler(arr.email, arr.password);
    } catch (error) {
      console.log(error);

      setError(error.message);
    }
  };

  if (isLoggedIn) {
    push("/steps");
    return;
  }
  // useEffect(() => {
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

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
          type={"email"}
          value={arr.email}
        />
        <Inputg
          onchange={handleChange}
          name={"password"}
          placeholder={"Password"}
          type={"password"}
          value={arr.password}
        />
        {error && <div className="text-red-500">{error}</div>}

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
