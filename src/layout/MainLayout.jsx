import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/v3/Nav";
import LiveFireHeader from "../components/v2/live_fire/LiveFireHeader";
import Footer from "../components/v2/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { Outlet } from "react-router-dom";
import TopNav from "../components/v2/TopNav";
import ScrollToTop from "../components/ScrollToTop"; // 👈 Import it

const MainLayout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isBlogPage1 = location.pathname === "/launches-defcomm";
  const isBlogPage2 = location.pathname === "/defcomm-attend";
  const isBlogPage3 = location.pathname === "/defcomm-unveil";
  const isBountyPage = location.pathname.startsWith("/bounty");

  return (
    <div className="w-screen bg-gray-50">
      <ScrollToTop />
      {(isHomePage || isBlogPage1 || isBlogPage2 || isBlogPage3) && <TopNav />}
      {!isHomePage &&
        !(isBlogPage1 || isBlogPage2 || isBlogPage3) &&
        (isBountyPage ? <LiveFireHeader /> : <Nav />)}
      <main className="w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default MainLayout;
