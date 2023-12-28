import { Link } from "@tanstack/react-router";
import { SIDEBAR_ITEMS } from "../../data/constanItems";
import { TOGGLE_ICONS } from "../../data/constanItems";

function Sidebar() {
  return (
    <div className="fixed flex h-screen w-60 flex-col border-r-[1px] border-border-clr bg-dark-secondary p-4 grid-in-sidebar">
      <div className="self-center text-lg font-bold text-main-clr">
        <Link to={"/"}>ChallengerX</Link>
      </div>
      <div className="absolute right-[-12px] top-2 flex h-6 w-6 select-none items-center justify-center rounded-full bg-red-50 text-red-400">
        {TOGGLE_ICONS.arrowBack}
      </div>
      <div>
        <ul>
          {SIDEBAR_ITEMS.map((link) => (
            <li key={link.path}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>Logout</div>
    </div>
  );
}

export default Sidebar;
