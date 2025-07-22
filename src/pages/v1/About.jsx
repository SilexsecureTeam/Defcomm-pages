import about from "../../assets/landing/about.jpg";
import teamImg from "../../assets/landing/meet.jpg";
import identityImg from "../../assets/landing/identity.jpg";
import serve1 from "../../assets/landing/serve1.jpg";
import serve2 from "../../assets/landing/serve2.jpg";
import serve3 from "../../assets/landing/serve3.jpg";
import serve4 from "../../assets/landing/serve4.jpg";
import FeaturedPartners from "../../components/FeaturedPartners";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[480px] md:h-[560px] flex items-center bg-gradient-to-r from-[#36460A] to-[#000000] text-white overflow-hidden">
        <img
          src={about}
          alt="Defcomm building"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#36460A] to-[#000000] opacity-80 z-10" />
        <div className="relative z-20 w-full mx-auto px-6 md:px-14">
          <div className="pt-8 pb-12">
            <h1 className="text-2xl md:text-5xl font-normal mb-6 leading-tight">
              Securing What Matters Most&nbsp; With
              <br className="hidden md:block" /> Intelligence, Tech &amp; Trust
            </h1>
            <p className="text-base md:text-lg mb-8 max-w-xl">
              DefComm is redefining modern protection across corporate,
              tactical, and emergency sectors.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#89AF20] hover:bg-green-600 text-white px-6 py-2 rounded font-semibold">
                Explore Solutions
              </button>
              <button className="bg-white text-green-700 border border-green-700 px-6 py-2 rounded font-semibold">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Identity Section */}
      <section className=" px-6 md:px-14 py-16 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-[#36460A] text-xl font-semibold mb-4">
            Our Identity
          </h2>
          <p className="text-gray-700 leading-[1.8]">
            Leading the Future of Secure Communication & Tactical Innovation
            <br />
            At DefComm, we are committed to redefining what modern security
            looks like — not just for high-risk operations, but for executive
            teams, public safety professionals, private clients, and
            organizations that require uncompromising protection in an
            increasingly unpredictable world.
            <br />
            Born out of a need for smart, scalable, and resilient defense tools,
            DefComm bridges the gap between field-grade reliability and modern
            technological excellence. Our solutions are trusted by those who
            protect high-value assets, execute rapid response teams, manage
            corporate risk, and safeguard executive roles.
            <br />
            Whether you’re a corporate security director, a first responder, a
            private protection agency, or part of a tactical unit, we understand
            your challenges and we’re built to help you overcome them. Our
            commitment goes beyond hardware and systems — we offer a complete
            ecosystem of security, including strategy, consultation, support,
            and custom integration to match your organization’s needs.
            <br />
            At DefComm, we believe protection is more than a product — it’s a
            promise: to enable confidence, ensure continuity, and secure what
            matters most.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-stretch">
          <img
            src={identityImg}
            alt="Professional"
            className="rounded-xl w-full h-full object-cover shadow-lg max-h-[600px]"
          />
        </div>
      </section>
      {/* Who We Serve Section */}
      <section className="mx-auto px-6 md:px-14 py-12">
        <h2 className="text-[#36460A] text-xl font-semibold mb-2">
          Who We Serve
        </h2>
        <p className="text-gray-700 mb-8">
          We equip a wide range of professionals and sectors:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col">
            <img
              src={serve1}
              alt="Corporate security teams"
              className="rounded-xl w-full h-72 object-cover mb-4"
            />
            <h3 className="font-semibold text-black mb-1">
              Corporate security teams
            </h3>
            <p className="text-gray-700">
              safeguarding people and infrastructure
            </p>
          </div>
          <div className="flex flex-col">
            <img
              src={serve2}
              alt="Executive protection & VVIP"
              className="rounded-xl w-full h-72 object-cover mb-4"
            />
            <h3 className="font-semibold text-black mb-1">
              Executive protection & VVIP
            </h3>
            <p className="text-gray-700">
              agents seeking discreet, smart security
            </p>
          </div>
          <div className="flex flex-col">
            <img
              src={serve3}
              alt="First responders and field"
              className="rounded-xl w-full h-72 object-cover mb-4"
            />
            <h3 className="font-semibold text-black mb-1">
              First responders and field
            </h3>
            <p className="text-gray-700">
              operatives requiring mission-ready gear
            </p>
          </div>
          <div className="flex flex-col">
            <img
              src={serve4}
              alt="Government agencies and tactical units"
              className="rounded-xl w-full h-72 object-cover mb-4"
            />
            <h3 className="font-semibold text-black mb-1">
              Government agencies and
            </h3>
            <p className="text-gray-700">
              tactical units operating in high-risk zones
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12">
        <h2 className="text-[#36460A] px-6 md:px-14 text-xl font-semibold mb-16">
          Meet the Team
        </h2>
        <img
          src={teamImg}
          alt="Our Team"
          className="w-full max-h-[550px] object-cover shadow-lg"
        />
      </section>
      <FeaturedPartners />
      {/* <Footer /> */}
    </div>
  );
};

export default About;
