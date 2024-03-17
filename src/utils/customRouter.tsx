import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../routes/login";
import Dashboard from "../routes/dashboard";
import PrivateRoutes from "../routes/privateRoutes";
const CustomRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Dashboard />} path="/" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Route>
        <Route element={<Login />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRouter;
