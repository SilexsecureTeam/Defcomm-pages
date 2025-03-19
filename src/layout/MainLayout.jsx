import React from "react";
import Nav from "../components/landing/Header/Nav";
import Footer from "../components/landing/Footer/Footer";
import BackToTopButton from "../components/BackToTopButton";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-gray-50">
      <Nav />
      <main className="w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default MainLayout;
