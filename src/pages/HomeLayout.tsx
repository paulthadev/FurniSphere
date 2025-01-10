import { Header, Footer } from "@/components";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <Header />
      <nav>Nav</nav>
      <Outlet />
      <Footer />
    </>
  );
}

export default HomeLayout;
