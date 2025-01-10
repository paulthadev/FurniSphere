import { GalleryVerticalEnd } from "lucide-react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="hidden items-center justify-center rounded-lg bg-primary p-2 text-white lg:flex"
    >
      <GalleryVerticalEnd className="h-8 w-8" />
    </Link>
  );
}

export default Logo;
