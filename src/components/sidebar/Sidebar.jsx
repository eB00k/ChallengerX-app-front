import { Link } from "@tanstack/react-router";
import { SIDEBAR_ITEMS } from "../../data/constanItems";
import { TOGGLE_ICONS } from "../../data/constanItems";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiExpertsexchange } from "react-icons/si";
import SidebarItem from "./SidebarItem";
import { useStateContext } from "../../context/ContextProvider";
import { twMerge } from "tailwind-merge";
import {
  framerSidebarBackground,
  framerSidebarPanel,
  framerText,
} from "../../data/motionData";

function Sidebar() {
  const { activeMenu, setActiveMenu } = useStateContext();
  const isActive = true;

  const toggleMenu = () => {
    setActiveMenu((prev) => !prev);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.aside
        {...framerSidebarPanel}
        className={twMerge(
          "fixed flex h-screen w-60 flex-col border-r-[1px] border-border-clr bg-dark-secondary p-4 grid-in-sidebar",
          !activeMenu && "w-[80px]",
        )}
      >
        <div className="self-center overflow-hidden text-lg font-bold text-main-clr">
          <Link to={"/"} className="flex items-center justify-center gap-1">
            {activeMenu && (
              <motion.span {...framerText("text")} className="text-xl">
                Challenger
              </motion.span>
            )}
            <SiExpertsexchange className="text-[24px]" />
          </Link>
        </div>
        <div
          className="absolute right-[-12px] top-4 z-30 flex h-6 w-6 cursor-pointer select-none items-center justify-center rounded-full bg-red-50 text-red-400 shadow-sm shadow-[#ffffffc8]"
          onClick={toggleMenu}
        >
          {activeMenu ? TOGGLE_ICONS.arrowBack : TOGGLE_ICONS.arrowForward}
        </div>
        <div className="mt-8 flex flex-col justify-center gap-2 overflow-hidden">
          {SIDEBAR_ITEMS.map((link, index) => (
            <SidebarItem
              key={link.title}
              {...link}
              isActive={isActive}
              idx={index}
            />
          ))}
        </div>
        <div>Logout</div>
      </motion.aside>
    </AnimatePresence>
  );
}

export default Sidebar;
