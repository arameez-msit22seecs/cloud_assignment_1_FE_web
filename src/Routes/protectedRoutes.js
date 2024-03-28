import React from "react";

function Protected({ children, allowedRoles }) {
  console.log("children", children);
  return <>{children}</>;
}
export default Protected;
