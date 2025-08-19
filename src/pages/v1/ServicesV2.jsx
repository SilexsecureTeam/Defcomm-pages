import HomeService2 from "../../components/v3/HomeService2.jsx";
// import CoreValue2 from "../../components/landing/Content/CoreValue2.jsx";
import { Helmet } from "react-helmet";

function Services2() {
  return (
    <div className="w-full mx-auto">
       <Helmet>
        <title>Defcomm® Services | Cybersecurity, Encrypted Communication & Secure Systems</title>
        <meta
          name="description"
          content="Defcomm® delivers specialized services in end-to-end encryption, secure communication platforms, data protection, and cyber defense. We help governments, enterprises, and organizations eliminate insider threats and safeguard critical information."
        />
      </Helmet>
      <HomeService2 />
      {/* <CoreValue2 /> */}
      {/* <OurProduct /> */}
    </div>
  );
}

export default Services2;
