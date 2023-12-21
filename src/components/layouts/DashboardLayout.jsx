import React from "react";
import { Outlet } from "@tanstack/react-router";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

function DashboardLayout() {
  return (
    <div className="grid grid-areas-layout grid-cols-layout grid-rows-layout">
      <Navbar />
      <Sidebar />
      <Outlet/>
    </div>
  );
}

export default DashboardLayout;
