import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/dashboard", title: "Dashboard" },
  { to: "/dashboard/challenges", title: "Challenges" },
  { to: "/dashboard/tasks", title: "Tasks" },
];

function Sidebar() {
  return (
    <div className="fixed flex h-screen w-60 flex-col border-r-[1px] border-border-clr bg-dark-secondary p-4 grid-in-sidebar">
      <div className="self-center text-lg font-bold text-main-clr">
        <Link to={"/"}>ChallengerX</Link>
      </div>
      <div className="absolute right-[-12px] top-2 flex h-6 w-6 select-none items-center justify-center rounded-full bg-red-50 text-red-400">
        {"<"}
      </div>
      <div>
        <ul>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>Logout</div>
    </div>
  );
}

export default Sidebar;
