import React, { useContext } from "react";
import Form from "../../Components/Form/Form";
import Navbar from "../../Components/Navbar/Navbar";
import { AllContext } from "../../Context/Context";
import StudentDetail from "../../Components/StudentDetail/StudentDetail";

const StudentDashbord = () => {
  const { formStatusCheck } = useContext(AllContext);
  return (
    <>
      <Navbar />
      {formStatusCheck ? <Form /> : <StudentDetail />}
    </>
  );
};

export default StudentDashbord;
