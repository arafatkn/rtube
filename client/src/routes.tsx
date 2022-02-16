import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/app/Home";
import AuthLayout from "./layouts/auth.layout";

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
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
        ],
    },
];