import Nav from "../../components/landing/Header/Nav.jsx";
import HomeService from "../../components/landing/Content/HomeService.jsx";
import CoreValue from "../../components/landing/Content/CoreValue.jsx";
import ResultsVideo from "../../components/landing/Content/ResultsVideo.jsx";
import OurProduct from "../../components/landing/Content/OurProduct.jsx";
import Footer from "../../components/landing/Footer/Footer.jsx";
import BackToTopButton from "../../components/BackToTopButton.jsx";

function Services() {
  return (
    <div className="w-full mx-auto">
      <HomeService />
      <CoreValue />
      {/* <OurProduct /> */}
    </div>
  );
}

export default Services;
