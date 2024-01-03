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
  framerIcon,
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
          "fixed flex h-screen w-60 flex-col border-r-[1px] border-border-clr bg-dark-secondary p-4 transition-all duration-500 grid-in-sidebar",
          !activeMenu && "w-[80px]",
        )}
      >
        <div className="relative self-center text-lg font-bold text-main-clr">
          <Link to={"/"} className="flex items-center justify-center gap-1">
            <motion.span {...framerIcon}>
              <SiExpertsexchange className="text-[24px]" />
            </motion.span>
            {activeMenu && (
              <motion.span {...framerText(2)} className="text-xl">
                Challenger
              </motion.span>
            )}
          </Link>
        </div>
        <div
          className="absolute right-[-12px] top-4 z-30 flex h-6 w-6 cursor-pointer select-none items-center justify-center rounded-full bg-white text-border-clr"
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
      </motion.aside>
    </AnimatePresence>
  );
}

export default Sidebar;
