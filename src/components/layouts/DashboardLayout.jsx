import React, { useContext } from "react";
import { Outlet } from "@tanstack/react-router";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import NavbarMobile from "../navbar/NavbarMobile";
import { useStateContext } from "../../context/ContextProvider";
import { twMerge } from "tailwind-merge";

function DashboardLayout() {
  const { activeMenu } = useStateContext();
  const isMobile = false;
  const variants = {
    default:
      "grid min-h-screen w-full grid-cols-layout grid-rows-layout bg-dark-primary grid-areas-layout transition-all duration-500",
    nonActiveMenu: "grid-cols-layout-non-active-menu",
    mobile:
      "grid-areas-layout-mobile grid-cols-layout-mobile grid-rows-layout-mobile",
  };
  return (
    <div
      className={twMerge(
        variants.default,
        !activeMenu && variants.nonActiveMenu,
        isMobile && variants.mobile,
      )}
    >
      <Navbar />
      {!isMobile && <Sidebar />}
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
