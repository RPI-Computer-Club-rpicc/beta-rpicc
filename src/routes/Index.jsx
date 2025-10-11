import React from "react";
import { Routes, Route } from "react-router";
import BaseLayout from "../layouts/BaseLayout";
import ScrollToTop from "../components/common/ScroolToTop";
import FullScreenLoader from "../components/common/FullScreenLoader";
import { NotFound } from "./LazyRoutes";
import PublicRoutes from "./PublicRoutes";
import SquadRoutes from "./SquadRoutes";
import AuthRoutes from "./AuthRoutes";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          {PublicRoutes}
          <Route path="squads">{SquadRoutes}</Route>
          <Route path="auth">{AuthRoutes}</Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
