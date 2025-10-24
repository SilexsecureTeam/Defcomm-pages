import { itemVariants } from "../../utils/formatter";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const FormHeader = ({
  title,
  organizer,
  slogan,
  tagline,
  date,
  description,
  accentColor = "from-oliveGreen to-olive",
}) => {
  return (
    <motion.div className="text-center mb-12" variants={itemVariants}>
      <div className={`bg-gradient-to-r ${accentColor} p-1 rounded-2xl mb-6`}>
        <div className="bg-gray-900 rounded-xl p-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            {title}
          </h1>

          {organizer && (
            <div className="flex justify-center items-center space-x-4 mb-4">
              <div className="h-1 w-16 bg-green-500 rounded-full"></div>
              <p className="text-green-300 text-lg font-semibold">
                {organizer}
              </p>
              <div className="h-1 w-16 bg-green-500 rounded-full"></div>
            </div>
          )}

          {slogan && (
            <p className="text-xl text-green-200 mb-2 font-light">{slogan}</p>
          )}
          {tagline && (
            <p className="text-lg text-gray-300 tracking-wide">{tagline}</p>
          )}
          {description && (
            <p className="text-base text-gray-400 mt-2">{description}</p>
          )}
        </div>
      </div>

      {date && (
        <div className="mt-6 bg-green-800/30 backdrop-blur-sm p-4 rounded-xl border border-green-700/50 inline-block">
          <p className="text-white font-semibold text-lg">DATE: {date}</p>
          <p className="text-green-300 font-medium">
            Connect with us virtually from wherever you are
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default FormHeader;
