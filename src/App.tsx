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
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

  {
    path: "cart",
    element: <Cart />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
