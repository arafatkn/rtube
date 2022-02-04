import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";

export const appRoutes = [
    {
        index: true,
        path: "/",
        element: <Home />
    },
    {
        path: "/history",
        element: <Home />
    },
    {
        path: "/subscriptions",
        element: <Home />
    }
];

export const authRoutes = [
    {
        index: true,
        path: "login",
        element: <Login />
    },
    {
        path: "register",
        element: <Register />
    },
];