import React from "react";
import { Outlet } from "react-router";
import Navber from "../../Pages/Navigation/Navber";

function Root() {
  return (
    <div className="bg-[#0B1021] h-screen">
      <Navber />
      <Outlet />
    </div>
  );
}

export default Root;
