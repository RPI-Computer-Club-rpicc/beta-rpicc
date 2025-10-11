import React from "react";
import { Route } from "react-router";
import { Login } from "./LazyRoutes";

const AuthRoutes = (
  <>
    <Route index element={<Login />} />
    <Route path="login" element={<Login />} />
  </>
);

export default AuthRoutes;
