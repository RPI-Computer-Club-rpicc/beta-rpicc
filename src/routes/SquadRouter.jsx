import React from "react";
import { Route } from "react-router";
 
import ProgrammingSquad from "../pages/squads/ProgrammingSquad";
import SquadsHome from "../pages/squads/SquadsHome";


const AppRoutes = () => {
  return (
    <> 
        <Route path="squads" >
          <Route index element={<SquadsHome />} />
          <Route path="programming" element={<ProgrammingSquad />} />
        </Route>
    </>
  );
};

export default AppRoutes;
