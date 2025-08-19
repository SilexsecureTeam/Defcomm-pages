import React from "react";
import About from "../../components/v3/About";
import Feature from "../../components/v3/Feature";
import Use from "../../components/v3/Use";
import Team from "../../components/v3/Team";
import NewsEventsSection from "../../components/v3/NewsEventsSection";
import Security from "../../components/v3/Security";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>About Us | Defcomm® – Leaders in End-to-End Encryption & Secure Communication</title>
        <meta
          name="description"
          content="Discover Defcomm®, a cybersecurity innovator building privacy-focused communication platforms, encrypted hardware, and AI-driven security solutions. Our mission: protecting data, identities, and national security with uncompromising encryption."
        />
      </Helmet>
      <About />
      <Feature />
      <Use />
      <Team />
      <NewsEventsSection />
      <Security />
    </div>
  );
};

export default AboutPage;
