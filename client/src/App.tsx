import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import {authRoutes, appRoutes} from "./routes";
import Error404 from "./pages/Error/404";
import AuthLayout from "./layouts/auth.layout";
import AppLayout from "./layouts/app.layout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

export default function App() {

    return (
        <Routes>
            <Route path="/auth" element={<AuthLayout />}>
                {/*{authRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                        index={route?.index}
                    />
                ))}*/}
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>

            <Route path="/" element={<AppLayout />}>
                {/*{appRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        children={route.element}
                    />
                ))}*/}
            </Route>

            <Route path="*" element={Error404} />
        </Routes>
    );
}
