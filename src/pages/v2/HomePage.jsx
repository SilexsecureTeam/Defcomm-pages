import React from "react";
import HeroSection from "../../components/v2/HeroSection";
import SecurityFeatures from "../../components/v2/SecurityFeatures";
import SecuritySection from "../../components/v2/SecuritySection";
import DataPrivacySection from "../../components/v2/DataPrivacySection";
import ProductSolution from "../../components/v2/ProductSolution";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div>
       <Helmet>
        <title>Defcomm® | End-to-End Encryption & Secure Communication Solutions</title>
        <meta
          name="description"
          content="Defcomm provides military-grade end-to-end encryption, secure hardware, and privacy-focused communication platforms designed to protect data, prevent leaks, and safeguard digital identity. Stay connected without ever being exposed."
        />
      </Helmet>
      <HeroSection />
      <SecurityFeatures />
      <SecuritySection />
      <DataPrivacySection />
      <ProductSolution />
    </div>
  );
};

export default HomePage;
