import Footer from "./Footer";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
