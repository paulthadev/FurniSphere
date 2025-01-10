import { CarTaxiFrontIcon } from "lucide-react";
import { Button } from "../ui/button";

function CartButton() {
  return (
    <div>
      <Button size="icon">
        <CarTaxiFrontIcon />
      </Button>
    </div>
  );
}

export default CartButton;
