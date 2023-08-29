import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AllContext = createContext();
const BASE_URL = process.env.REACT_APP_BASE_URL;


const AllProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: null,
    });
    const [render, setRender] = useState(false);
    const [role, setRole] = useState();
    const [isSignedIn, setIsSignedIn] = useState(false);

    const Authentication = async () => {
        try {
          const Response = (await axios.get(`${BASE_URL}/api/authentication`)).data;
          if (Response) {
            setRole(Response);
          }
        } catch (error) {
          console.log(error);
        }
      };

      const SignedInStatus = async () => {
        try {
          const token = JSON.parse(localStorage.getItem("auth")).token;
    
          if (token) if (!auth.token) setAuth({ token });
    
          setIsSignedIn(true);
        } catch (error) {
          console.log(error);
        }
      };
    
    

    const NotificationMethod = async (message, status) => {
        if (status) {
            toast.success(`${message}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.error(`${message}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    useEffect(() => {
        // setRender(!render);
        if (isSignedIn) {
       
        }
        if (auth.token) {
        //   Authentication();
        }
        // SignedInStatus();
      }, [render, auth.token, isSignedIn]);


    return (
        <AllContext.Provider
            value={{
                NotificationMethod,
                role,
                setAuth,
                isSignedIn,
                render,
                setRender
            }}
        >
            {children}
        </AllContext.Provider>
    );
};

// const UseController = () => useContext(AllContext);

export { AllContext, AllProvider };