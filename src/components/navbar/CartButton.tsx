import { ShoppingCartIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function CartButton() {
  const numItemsInCart = 5;
  return (
    <div>
      <Button
        size="icon"
        variant="outline"
        asChild
        className="relative flex items-center justify-center"
      >
        <Link to="/cart">
          <ShoppingCartIcon className="text-primary dark:text-white" />

          <span
            className={`absolute -right-3 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white dark:bg-primary-foreground dark:text-primary`}
          >
            {numItemsInCart}
          </span>
        </Link>
      </Button>
    </div>
  );
}

export default CartButton;
