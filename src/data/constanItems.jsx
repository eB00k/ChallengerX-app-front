import { BiSolidDashboard } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { CgGoogleTasks } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

export const TOGGLE_ICONS = {
  arrowBack: <IoIosArrowBack />,
  arrowForward: <IoIosArrowForward />,
};

export const SIDEBAR_ITEMS = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <BiSolidDashboard />,
  },
  {
    title: "Challenges",
    path: "/dashboard/challenges",
    icon: <MdCalendarMonth />,
  },
  {
    title: "Tasks",
    path: "/dashboard/tasks",
    icon: <CgGoogleTasks />,
  },
  {
    title: "Logout",
    path: "/",
    icon: <IoLogOutOutline />,
    isLogout: true,
  },
];
