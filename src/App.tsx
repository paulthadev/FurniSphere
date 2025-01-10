import { Button } from "@/components/ui/button";
import { useAppSelector } from "./hooks";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

function App() {
  const { name } = useAppSelector((state) => state.userState);
  return (
    <div className=" font-bold grid place-content-center h-screen">
      Welcome to FurniSphere, {name}
      <Button
        variant="default"
        size="sm"
        onClick={() => console.log("clicked")}
      >
        Click Here
      </Button>
      <Cart />
    </div>
  );
}

export default App;
