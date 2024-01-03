import React from "react";
import { Outlet } from "@tanstack/react-router";
import NavbarHome from "../navbar/NavbarHome";

function HomeLayout() {
  return (
    <div className="grid-areas-layout-home grid-rows-layout-home grid-cols-layout-home">
      <NavbarHome />
      <Outlet />
    </div>
  );
}

export default HomeLayout;
