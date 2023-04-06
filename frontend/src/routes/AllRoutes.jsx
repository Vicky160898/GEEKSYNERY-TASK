import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Home />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Movies />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
