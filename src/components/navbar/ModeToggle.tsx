import { useAppDispatch, useAppSelector } from "@/hooks";
import { Sun, Moon, LaptopMinimal } from "lucide-react";
import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { setTheme } from "@/features/theme/themeSlice";

function ModeToggle() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.themeState);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Sun
            className={`absolute h-[1.2rem] w-[1.2rem] text-primary transition-transform duration-300 ${
              theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
            }`}
          />
          <Moon
            className={`absolute h-[1.2rem] w-[1.2rem] text-primary transition-transform duration-300 ${
              theme === "dark" ? "-rotate-90 scale-100" : "rotate-90 scale-0"
            }`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => dispatch(setTheme("light"))}>
          <Sun className="mr-2" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => dispatch(setTheme("dark"))}>
          <Moon className="mr-2" /> Dark
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => dispatch(setTheme("system"))}>
          <LaptopMinimal className="mr-2" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ModeToggle;
