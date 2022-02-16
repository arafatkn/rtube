import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Error404 from "./pages/Error/404";
import AuthLayout from "./layouts/auth.layout";
import AppLayout from "./layouts/app.layout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import UserLayout from "./layouts/user.layout";
import Dashboard from "./pages/user/Dashboard";
import Home from "./pages/app/Home";
import Watch from "./pages/app/Watch";

export default function App() {

    return (
        <Routes>
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>

            <Route path="/user" element={<UserLayout />}>
                <Route path="" element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="videos" element={<Dashboard />} />
                <Route path="videos/new" element={<Dashboard />} />
            </Route>

            <Route path="/" element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/watch/:videoId" element={<Watch />} />
            </Route>

            <Route path="*" element={Error404} />
        </Routes>
    );
}
