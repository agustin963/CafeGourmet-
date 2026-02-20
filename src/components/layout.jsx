import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Breadcrum from "./breadcrum";

function Layout() {
  return (
    <>
      <Navbar />
      <Breadcrum />
      <Outlet />
    </>
  );
}

export default Layout;