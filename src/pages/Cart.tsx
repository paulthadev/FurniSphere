import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <p>Cart</p>
      <Button asChild size="sm">
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
}

export default Cart;
