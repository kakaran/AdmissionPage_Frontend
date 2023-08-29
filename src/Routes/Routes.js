import Login from "../Pages/Login";

const CommonRoutes = [
    { path: "/", element: <Login /> },
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