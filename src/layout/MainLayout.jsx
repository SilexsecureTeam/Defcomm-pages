import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/v3/Nav";
import NewNav from "../components/v3/NewNav";
import LiveFireHeader from "../components/v2/live_fire/LiveFireHeader";
import Footer from "../components/v2/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { Outlet } from "react-router-dom";
import TopNav from "../components/v2/TopNav";
import { Helmet } from "react-helmet";

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
  const isBlogs = location.pathname === "/blogs";

  return (
    <div
      id="scrollable-container"
      className="w-screen bg-gray-50 h-screen overflow-y-auto"
    >
      <Helmet>
        <title>
          Defcomm® | End-to-End Encryption & Secure Communication Solutions
        </title>
        <meta
          name="description"
          content="Defcomm provides military-grade end-to-end encryption, secure hardware, and privacy-focused communication platforms designed to protect data, prevent leaks, and safeguard digital identity. Stay connected without ever being exposed."
        />
      </Helmet>
      {(isHomePage ||
        isBlogPage1 ||
        isBlogPage2 ||
        isBlogPage3 ||
        isBlogs ||
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
        !(isBlogPage1 || isBlogPage2 || isBlogPage3 || isSoftware || isBlogs) &&
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
