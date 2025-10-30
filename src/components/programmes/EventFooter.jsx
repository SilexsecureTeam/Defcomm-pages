// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { itemVariants } from "../../utils/formatter";

const EventFooter = ({ socialLinks = {}, contact = {} }) => {
  const { email = "support@defcomm.ng", website = "https://www.defcomm.ng" } =
    contact;

  const {
    instagram = "https://www.instagram.com/defcomm_solution/",
    twitter = "https://x.com/DefcommS",
    linkedin = "https://www.linkedin.com/company/defcomm-solutions/?viewAsMember=true",
  } = socialLinks;

  return (
    <motion.div
      className="mt-8 text-center text-gray-400 text-sm"
      variants={itemVariants}
    >
      <p>
        For assistance, contact us at{" "}
        <a href={`mailto:${email}`} className="text-green-400 hover:underline">
          {email}
        </a>
      </p>

      <p className="mt-2">
        Follow us:
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline mx-1"
        >
          Instagram
        </a>
        |
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline mx-1"
        >
          X (Twitter)
        </a>
        |
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline mx-1"
        >
          LinkedIn
        </a>
      </p>

      <p className="mt-2">
        Visit us:{" "}
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline"
        >
          {website.replace("https://", "")}
        </a>
      </p>
    </motion.div>
  );
};

export default EventFooter;
