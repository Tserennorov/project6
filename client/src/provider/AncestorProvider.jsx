"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [token, setToken] = useState("");
  const router = useRouter();

  const loginHandler = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:8000/api/user/login", {
        email: email,
        password: password,
      });

      if (res?.data?.token) {
        window.localStorage.setItem("token", res.data.token);
        setIsLoggedIn(true);
        setLoading(false);
        setToken(res.data.token);
        router.push("/");
      } else {
        window.localStorage.removeItem("token", res.data.token);
        setIsLoggedIn(false);
        setLoading(false);
        setToken("");
        router.push("/login");
      }
    } catch (error) {
      window.localStorage.removeItem("token", res.data.token);
      setIsLoggedIn(false);
      setLoading(false);
      setToken("");
      router.push("/login");
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setLoading(false);
      setToken(token);
    } else {
      setIsLoggedIn(false);
      setLoading(false);
      setToken("");
      router.push("/login");
    }
  }, []);

  return (
    <UserContext.Provider value={{ loginHandler, isLoggedIn, loading, token }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const user = useContext(UserContext);
  return user;
};
