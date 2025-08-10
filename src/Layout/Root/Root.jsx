import React from "react";
import { Outlet } from "react-router";
import Navber from "../../Pages/Navigation/Navber";

function Root() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-0 text-gray-100">
      <Navber />
      <Outlet />
    </div>
  );
}

export default Root;
