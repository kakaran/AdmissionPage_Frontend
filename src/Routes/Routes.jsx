import Login from "../Pages/Login";
import Signup from "../Pages/Signup/Signup";

const CommonRoutes = [
    { path: "/", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "*", element: <Login /> },
];

const AdminRoutes = [

]

const StudentRoutes = [

]

const routes = (role, isSignedIn) => {
    const SignedInList = role === "Admin" ? AdminRoutes : StudentRoutes;
    return isSignedIn ? [...SignedInList, ...CommonRoutes] : [...CommonRoutes];
};

export default routes;
