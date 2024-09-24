"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button, Donthaveacoount, Inputg, Logo, Welcomeback } from ".";
import { Loading } from "../Loading";
const Login = () => {
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
      const res = await axios.post("http://localhost:8000/api/user/login", arr);
      const token = res.data.token;
      localStorage.setItem("token", token);

      push("/steps");
    } catch (error) {
      serError(error.message);
    }

    console.log("success");
  };

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
