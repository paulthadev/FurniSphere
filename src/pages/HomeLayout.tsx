import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <header>Header</header>
      <nav>Nav</nav>
      <Outlet />
      <footer />
    </>
  );
}

export default HomeLayout;
