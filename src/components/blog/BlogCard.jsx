import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const BlogCard = ({ blog, theme = "light" }) => {
    return (
        <Link to={`/blogs/${blog.slug}`}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: false, amount: 0.2 }}
                className={theme === "dark" ? "border border-white bg-gradient-to-b from-[#36460A] to-[#000000] rounded-2xl shadow-xl pt-4 h-full flex flex-col justify-between" : "border border-white rounded-2xl shadow-xl pt-4 h-full flex flex-col justify-between"}
            >
                <h3 className="text-white text-xl px-4 font-bold mb-4 line-clamp-2">
                    {blog.title}
                </h3>

                <p className="text-white text-sm px-4 h-[100px] mb-4">
                    {blog.shortDescription}
                </p>

                <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-52 px-1 pb-2 object-cover rounded-lg"
                />
            </motion.div>
        </Link>
    );
};

export default BlogCard;