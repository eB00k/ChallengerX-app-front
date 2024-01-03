import { SiExpertsexchange } from "react-icons/si";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { framerIcon, framerText } from "../../data/motionData";

function Logo() {
  const activeMenu = true;
  return (
    <div className="relative self-center text-lg font-bold text-main-clr">
      <Link to={"/"} className="flex items-center justify-center gap-1">
        <motion.span {...framerIcon}>
          <SiExpertsexchange className="text-[24px]" />
        </motion.span>
        {activeMenu && (
          //   <span className="hidden text-xl sm:inline">Challenger</span>
          <motion.span {...framerText(2)} className="hidden text-xl sm:inline">
            Challenger
          </motion.span>
        )}
      </Link>
    </div>
  );
}

export default Logo;
