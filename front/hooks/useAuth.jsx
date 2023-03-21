import Amplify, { Auth } from "aws-amplify";
import React, { createContext, useContext, useEffect, useState } from "react";
import { AwsConfigAuth } from "../config/auth";

Amplify.configure({ Auth: AwsConfigAuth });

const authContext = createContext({});

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((result) => {
        setUsername(result.username);
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch(() => {
        setUsername("");
        setIsAuthenticated(false);
        setIsLoading(false);
      });
  }, []);

  const signUp = async (username, password, email, phone_number) => {
    try {
      const result = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
          phone_number,
        },
        autoSignIn: {
          enabled: true,
        },
      });
      console.log("회원가입 result", result);
    } catch (error) {
      console.log("회원가입 에러", error);
      return {
        success: false,
        message: "SIGNUP FAIL",
      };
    }
  };

  const confirmSignUp = async (username, code) => {
    try {
      await Auth.confirmSignUp(username, code);
      return { success: true, message: "" };
    } catch (error) {
      console.log("error confirming sign up", error);
      return {
        success: false,
        message: "CONFIRM FAIL",
      };
    }
  };

  const signIn = async (username, password) => {
    try {
      const result = await Auth.signIn(username, password);
      setUsername(result.username);
      setIsAuthenticated(true);
      return { success: true, message: "" };
    } catch (error) {
      console.log("로그인 에러", error);
      return {
        success: false,
        message: "LOGIN FAIL",
      };
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUsername("");
      setIsAuthenticated(false);
      return { success: true, message: "" };
    } catch (error) {
      return {
        success: false,
        message: "LOGOUT FAIL",
      };
    }
  };

  return {
    isLoading,
    isAuthenticated,
    username,
    signUp,
    confirmSignUp,
    signIn,
    signOut,
  };
};
