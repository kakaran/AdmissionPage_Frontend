import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AllContext } from "./Context/Context";
// import routes from "./Routes/Routes";
// import { useContext } from "react";
import Login from "./Pages/Login";
import "./App.css";
import Signup from "./Pages/Signup/Signup";

function App() {
  // const { role, isSignedIn } = useContext(AllContext);

  return (
    <Router>
      <Routes>
        {/* {routes(role, isSignedIn)?.map((route, index) => {
          return <Route key={index} {...route} />;
        })} */}
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
