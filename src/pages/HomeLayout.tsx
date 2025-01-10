import { Header, Footer, Navbar } from "@/components";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Navbar />

      {/* Main content area should grow to fill available space */}
      <div className="flex-grow">
        <div className="align-element py-20">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomeLayout;
