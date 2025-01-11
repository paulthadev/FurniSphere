import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { links } from "@/utils";
import { AlignLeft } from "lucide-react";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";

function LinksDropdown(): JSX.Element {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <AlignLeft className="h-8 w-8 text-primary dark:text-white" />
          <span className="sr-only">Toggle Links</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="w-52 lg:hidden"
        sideOffset={10}
      >
        {links.map((link) => (
          <DropdownMenuItem key={link.label}>
            <NavLink
              to={link.href}
              className={({ isActive }) => {
                return `w-full capitalize ${isActive ? "font-medium text-primary" : ""} `;
              }}
            >
              {link.label}
            </NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
