import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/landing/Header/Nav";
import LiveFireHeader from "../components/v2/live_fire/LiveFireHeader";
import Footer from "../components/v2/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isBountyPage = location.pathname.startsWith("/bounty"); // Adjust based on your route

  return (
    <div className="w-screen bg-gray-50">
      {!isHomePage && (isBountyPage ? <LiveFireHeader /> : <Nav />)}

      <main className="w-full mx-auto max-w-peak">
        <Outlet />
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default MainLayout;
