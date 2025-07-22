import Nav from "../../components/landing/Header/Nav.jsx";
import HomeService from "../../components/landing/Content/HomeService.jsx";
import CoreValue from "../../components/landing/Content/CoreValue.jsx";

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
