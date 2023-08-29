import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/login-form";
import { AllContext } from "../Context/Context";

const Login = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const { setAuth, NotificationMethod } = useContext(AllContext);
  const navigate = useNavigate();

  const UserLogin = async (values) => {
    console.log(values);
    try {
      const Data = (await axios.post(`${BASE_URL}/api/login`, {})).data;
      if (Data.token) {
        localStorage.setItem("auth", JSON.stringify(Data));
        // Authentication(Data.token)
        setAuth({
          token: Data.token,
        });
        navigate("/home");
      }
      NotificationMethod(Data.message, Data.status);
    } catch (error) {
      console.log(error);
      NotificationMethod(
        error.response.data.message,
        error.response.data.status
      );
    }
  };

  return (
    <main className="h-screen grid place-content-center">
      <LoginForm onSubmit={UserLogin} />
    </main>
  );
};

export default Login;