import React from "react";
import { Route } from "react-router";
import { SquadsHome, SquadCommon } from "./LazyRoutes";

const SquadRoutes = (
  <>
    <Route index element={<SquadsHome />} />
    <Route path=":slug" element={<SquadCommon />} />
  </>
);

export default SquadRoutes;
