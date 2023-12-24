import React from "react";
import { Outlet } from "@tanstack/react-router";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

function DashboardLayout() {
  return (
    <div className="grid min-h-screen w-full grid-cols-layout grid-rows-layout bg-dark-primary grid-areas-layout">
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
