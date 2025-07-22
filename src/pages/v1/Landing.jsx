import Nav from "../../components/landing/Header/Nav.jsx";
import Home from "../../components/landing/Content/Home.jsx";
import CoreValue from "../../components/landing/Content/CoreValue.jsx";
import ResultsVideo from "../../components/landing/Content/ResultsVideo.jsx";
import OurProduct from "../../components/landing/Content/OurProduct.jsx";

function Landing() {
  return (
    <div className="w-full mx-auto">
      <Home />
      <CoreValue />
      <ResultsVideo />
      <OurProduct />
    </div>
  );
}

export default Landing;
