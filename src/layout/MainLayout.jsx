import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/v3/Nav";
import NewNav from "../components/v3/NewNav";
import LiveFireHeader from "../components/v2/live_fire/LiveFireHeader";
import Footer from "../components/v2/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { Outlet } from "react-router-dom";
import TopNav from "../components/v2/TopNav";
import ScrollToTop from "../components/ScrollToTop";

const MainLayout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isBlogPage1 = location.pathname === "/launches-defcomm";
  const isBlogPage2 = location.pathname === "/defcomm-attend";
  const isBlogPage3 = location.pathname === "/defcomm-unveil";
  const isProduct = location.pathname === "/products";
  const isSoftware = location.pathname === "/software";
  const isBountyPage = location.pathname.startsWith("/bounty");
  const isServices = location.pathname === "/services";
  const isCareer = location.pathname === "/career";
  const isAndriod = location.pathname === "/career/andriod-dev";
  const isManager = location.pathname === "/career/product-manager";
  const isOperating = location.pathname === "/career/operating-system";
  const isVideo = location.pathname === "/watch";
  const isForm = location.pathname === "/form";
  const isBook = location.pathname === "/book";

  return (
    <div className="w-screen bg-gray-50">
      <ScrollToTop />
      {(isHomePage ||
        isBlogPage1 ||
        isBlogPage2 ||
        isBlogPage3 ||
        isSoftware) && <TopNav />}
      {!isHomePage &&
        !isServices &&
        !isCareer &&
        !isAndriod &&
        !isManager &&
        !isOperating &&
        !isVideo &&
        !isForm &&
        !isBook &&
        !(isBlogPage1 || isBlogPage2 || isBlogPage3 || isSoftware) &&
        (isBountyPage ? <LiveFireHeader /> : isProduct ? <NewNav /> : <Nav />)}

      <main className="w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default MainLayout;
