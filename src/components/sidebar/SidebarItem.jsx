import React from "react";
import { Link } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useStateContext } from "../../context/ContextProvider";
import { framerIcon, framerText } from "../../data/motionData";

function SidebarItem({ idx, title, icon, path, isActive }) {
  const { activeMenu } = useStateContext();
  return (
    <Link to={path}>
      <div
        className={twMerge(
          "flex items-center gap-2 rounded-md p-2 hover:bg-dark-content",
          isActive && title === "Dashboard" && "text-main-clr",
          !activeMenu && "justify-center p-3",
        )}
      >
        <motion.div {...framerIcon} className="text-[22px]">
          {icon}
        </motion.div>
        {activeMenu && (
          <motion.span {...framerText(idx)} className="font-medium">
            {title}
          </motion.span>
        )}
      </div>
    </Link>
  );
}

export default SidebarItem;
