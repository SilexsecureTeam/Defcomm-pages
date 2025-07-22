import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/landing/Header/Nav";
import Footer from "../components/v2/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { Outlet } from "react-router-dom";
import TopNav from "../components/v2/TopNav";

const MainLayout = () => {
  const location = useLocation();
  console.log("Current Pathname:", location.pathname);
  const isHomePage = location.pathname === "/";

  return (
    <div className="w-screen bg-gray-50">
      {!isHomePage && <Nav />}
      <main className="w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default MainLayout;
