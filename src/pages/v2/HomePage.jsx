import React from "react";
import HeroSection from "../../components/v2/HeroSection";
import SecurityFeatures from "../../components/v2/SecurityFeatures";
import SecuritySection from "../../components/v2/SecuritySection";
import DataPrivacySection from "../../components/v2/DataPrivacySection";
import ProductSolution from "../../components/v2/ProductSolution";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <SecurityFeatures />
      <SecuritySection />
      <DataPrivacySection />
      <ProductSolution />
    </div>
  );
};

export default HomePage;
