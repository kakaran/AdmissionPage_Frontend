import React, { useContext } from "react";
import Form from "../../Components/Form/Form";
import Navbar from "../../Components/Navbar/Navbar";
import { AllContext } from "../../Context/Context";

const StudentDashbord = () => {
  const { formStatusCheck } = useContext(AllContext)
  return (
    <>
      <Navbar />
      {
        formStatusCheck ? <Form /> : "Form Detail Show"

      }
    </>
  );
};

export default StudentDashbord;
