import { Header, Footer } from "@/components";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <Header />

      <nav>Nav</nav>

      <div className="align-element py-20">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default HomeLayout;
