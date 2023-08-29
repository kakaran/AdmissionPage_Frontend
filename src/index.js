import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AllProvider } from "./Context/Context";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AllProvider>
    <App />
    <ToastContainer />
  </AllProvider>

);
