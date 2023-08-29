import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllContext } from "./Context/Context";
import routes from "./Routes/Routes";
import { useContext } from "react";
import Signup from "./Pages/Signup/Signup.js"

function App() {
  // const { role, isSignedIn } = useContext(AllContext);

  return (
    <Router>
      <Routes>
        {/* {routes(role, isSignedIn)?.map((route, index) => {
          return <Route key={index} {...route} />;
        })} */}
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
