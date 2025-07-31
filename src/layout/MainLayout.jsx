import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/v3/Nav";
import LiveFireHeader from "../components/v2/live_fire/LiveFireHeader";
import Footer from "../components/v2/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { Outlet } from "react-router-dom";
import TopNav from "../components/v2/TopNav";

const MainLayout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isBountyPage = location.pathname.startsWith("/bounty"); // Adjust as needed

  return (
    <div className="w-screen bg-gray-50">
      {/* Show TopNav only on home page */}
      {isHomePage && <TopNav />}
      {/* Show TopNav only on about page */}
      {isAboutPage && <TopNav />}

      {/* On other pages, show LiveFireHeader or Nav */}
      {!isHomePage && (isBountyPage ? <LiveFireHeader /> : <Nav />)}

      <main className="w-full mx-auto">
        <Outlet />
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default MainLayout;
