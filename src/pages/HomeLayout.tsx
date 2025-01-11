import { Header, Footer, Navbar, Loading } from "@/components";
import { Outlet, useNavigation } from "react-router-dom";

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Navbar />

      {/* Main content area should grow to fill available space */}
      <div className="flex-grow">
        <div className="align-element py-20">
          {isPageLoading ? <Loading /> : <Outlet />}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomeLayout;
