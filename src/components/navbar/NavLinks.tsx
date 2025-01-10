import { links } from "@/utils";
import { NavLink } from "react-router-dom";

function NavLinks(): JSX.Element {
  return (
    <div className="hidden items-center justify-center gap-x-4 lg:flex">
      {links.map((link) => (
        <NavLink
          to={link.href}
          key={link.label}
          className={({ isActive }) =>
            `border- rounded-lg px-2 py-1 capitalize tracking-wide ${isActive ? "text-primary" : "font-light"}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}

export default NavLinks;
