import React from "react";
import { Link } from "@tanstack/react-router";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useStateContext } from "../../context/ContextProvider";
import { framerIcon, framerText } from "../../data/motionData";

function SidebarItem({ idx, title, icon, path, isLogout }) {
  const { activeMenu } = useStateContext();
  return (
    <Link
      to={path}
      activeOptions={{ exact: true }}
      activeProps={{ className: "text-main-clr" }}
    >
      <div
        className={twMerge(
          "flex items-center gap-2 rounded-md p-2 transition-all duration-300 hover:bg-dark-content",
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
