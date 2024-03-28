import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutingList } from "./list";
import NonProtected from "./nonProtectedRoutes";
import Protected from "./protectedRoutes";

const Routing = () => {
  return (
    <Routes>
      {RoutingList?.map((rout, key) => (
        <Route
          key={"rout" + key}
          path={rout?.route}
          element={
            rout?.is_protected ? (
              <Protected allowedRoles={rout.allowedRoles}>
                {rout?.element}
              </Protected>
            ) : (
              <NonProtected>{rout?.element}</NonProtected>
            )
          }
        />
      ))}
    </Routes>
  );
};

export default Routing;
