"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const loginHandler = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:8000/api/user/signin", {
        email,
        password,
      });

      window.localStorage.setItem("token", res.data.token);
      setIsLoggedIn(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setIsLoggedIn(false);
      throw new Error(error.response.data);
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setLoading(false);
    } else {
      setIsLoggedIn(false);
      setLoading(false);
      router.push("/login");
    }
  }, []);

  return (
    <UserContext.Provider value={{ loginHandler, isLoggedIn, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const user = useContext(UserContext);
  return user;
};
