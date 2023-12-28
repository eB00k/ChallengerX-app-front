import { BiSolidDashboard } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

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
    icon: <FaTasks />,
  },
];
