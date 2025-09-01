import { LockKeyhole, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import blog from "../../assets/blog4.png";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blog4Page = () => {
  const navigate = useNavigate();
  SwiperCore.use([Autoplay]);
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <section className="bg-limeAccent w-full">
        <div className="max-w-peak mx-auto py-10 md:py-20">
          <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
              className="font-extrabold text-[45px] text-start w-full mb-14"
            >
              Defcomm Solution Champions African Cybersecurity and Secure
              Defence Communications Following African Defence Chiefs Summit
              2025.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex items-center space-x-2 bg-[#54622D] rounded-full mx-auto w-fit py-2 px-4 mb-16 cursor-pointer"
              onClick={handleBack}
            >
              <LockKeyhole className="w-6 h-6 text-white" />
              <h1 className="text-sm text-[#F0F2F5] uppercase tracking-wide cursor-pointer">
                Back to News
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full flex justify-end"
            >
              <h1 className="text-sm text-[#3D3D3D] uppercase tracking-wide">
                April 25, 2025
              </h1>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-peak mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full flex justify-center mb-10"
          >
            <img
              src={blog}
              alt="Blog"
              className="w-full h-96 md:h-[410px] object-top object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-peak mx-auto flex flex-col space-y-6 text-[#3D3D3D] text-lg px-4 sm:px-6 md:px-10 lg:px-14 py-10">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <strong>Press Release</strong>
            <br />
            <br />
            Defcomm Solution Champions African Cybersecurity and Secure Defence
            Communications Following African Defence Chiefs Summit 2025
            <br />
            <br />
            Abuja, Nigeria – August 28, 2025 – Defcomm Solution has pledged to
            intensify its drive for homegrown cybersecurity innovation and
            secure defence communication platforms in response to the landmark
            African Defence Chiefs Summit 2025, hosted in Abuja, Nigeria.
            <br />
            <br />
            The Summit convened defence chiefs, policymakers, and security
            experts from across Africa, who collectively agreed that the
            continent’s future security depends on indigenous solutions, digital
            resilience, and unified defence strategies. Central to the
            discussions was the need for Africa to safeguard its cyberspace and
            communication channels against fast-evolving threats.
            <br />
            <br />
            Defcomm Solution, a leading African technology defence firm, has
            identified critical takeaways that align with its mission:
            <br />
            <br />
            <strong>1. Secure Communication as a Defense Imperative</strong>
            <br />
            <br />
            Alongside cyber defence, Defcomm is rolling out a secure, encrypted
            communication platform designed specifically for military and
            defence institutions. This platform ensures safe, reliable, and
            resilient communication channels for command, control, and
            intelligence sharing shielded from interception or compromise.
            <br />
            <br />
            “No military strategy succeeds without trusted communication,”
            Nsikak Joseph Nelson added. “Defcomm’s secure communication platform
            guarantees that African defence forces can coordinate seamlessly,
            confidently, and independently.”
            <br />
            <br />
            Strategic Next Steps
            <br />
            <br />
            Collaboration with Regional Bodies: Support the proposed permanent
            African Chiefs of Defence Staff Forum with secure digital
            infrastructure for cross-border defence communication and
            intelligence exchange.
            <br />
            <br />
            Capacity Building: Partner with defence institutions to train cyber
            professionals and communication specialists, strengthening Africa’s
            indigenous defence capacity.
            <br />
            <br />
            About Defcomm Solution
            <br />
            <br />
            Defcomm Solution is a pioneering African defence technology company
            dedicated to delivering homegrown cybersecurity and secure
            communication platforms. Built for the African context, Defcomm
            empowers defence institutions to safeguard sovereignty, protect
            digital assets, and ensure trusted, uninterrupted communication in
            an age of evolving threats.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Blog4Page;
