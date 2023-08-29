import SingleTable from "../Components/AdminTable/Single/SingleTable.jsx";
import AdminDashboard from "../Pages/AdminDashboard/AdminDashboard.jsx";
import StudentDashbord from "../Pages/Dashbords/StudentDashbord.jsx";
import Login from "../Pages/Login.jsx";
import Signup from "../Pages/Signup/Signup.jsx";

const CommonRoutes = [
  { path: "/", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "*", element: <Login /> },
];

const AdminRoutes = [
  { path: "/Dashbord", element: <AdminDashboard /> },
  { path: "student/:id", element: <SingleTable /> },
];

const StudentRoutes = [{ path: "/Dashbord", element: <StudentDashbord /> }];

const routes = (role, isSignedIn) => {
  const SignedInList = role === "Admin" ? AdminRoutes : StudentRoutes;
  return isSignedIn ? [...SignedInList, ...CommonRoutes] : [...CommonRoutes];
};

export default routes;
