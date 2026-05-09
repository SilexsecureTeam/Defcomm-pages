"use client";

import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { LockKeyhole, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { blogs } from "../utils/data/blog";
import {
    galleryVariants,
    modalVariants,
    uniqueNewsItems,
} from "../utils/dummies";
import BlogCard from "../components/blog/BlogCard";

const BlogDetailsPage = () => {
    const { slug } = useParams();

    const navigate = useNavigate();

    SwiperCore.use([Autoplay]);

    const blog = blogs.find((item) => item.slug === slug);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    if (!blog) {
        return (
            <div className="h-screen flex items-center justify-center">
                Blog not found
            </div>
        );
    }

    const galleryImages = blog.gallery || [];

    const handleBack = () => {
        navigate("/blogs");
    };

    const openModal = (index) => {
        setSelectedImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setSelectedImageIndex((prevIndex) =>
            prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="w-full">
            {/* HERO SECTION */}
            <section className="bg-limeAccent w-full">
                <div className="w-full max-w-peak mx-auto py-10 md:py-20">
                    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-14">
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="font-extrabold text-xl md:text-4xl text-start w-full mb-14"
                        >
                            {blog.title}
                        </motion.h2>

                        <motion.div
                            onClick={handleBack}
                            className="flex items-center space-x-2 bg-[#54622D] rounded-full w-fit mx-auto py-2 px-4 mb-16 cursor-pointer"
                        >
                            <LockKeyhole className="w-6 h-6 text-white" />

                            <span className="text-sm text-[#F0F2F5] uppercase tracking-wide">
                                Back to News
                            </span>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: false, amount: 0.1 }}
                            className="w-full flex justify-end"
                        >
                            <h1 className="text-sm text-[#3D3D3D] uppercase tracking-wide">
                                {blog.date}
                            </h1>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* BANNER IMAGE */}
            {/* <section className="bg-white">
                <div className="max-w-peak mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false, amount: 0.1 }}
                        className="w-full flex justify-center mb-10"
                    >
                        <img
                            src={blog.bannerImage}
                            alt={blog.title}
                            className="w-full h-96 md:h-[410px] object-cover object-[center_-200px] shadow-lg"
                        />
                    </motion.div>
                </div>
            </section> */}
            <section className="bg-white w-full">
                <div className="w-full max-w-peak mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false, amount: 0.1 }}
                        className="w-full mb-10"
                    >
                        <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
                            <img
                                src={blog.bannerImage}
                                alt={blog.title}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* BLOG CONTENT */}
            <section className="bg-white w-full">
                <div className="w-full max-w-peak mx-auto flex flex-col space-y-6 text-[#3D3D3D] text-sm md:text-lg px-4 sm:px-6 md:px-10 lg:px-14 py-10">
                    {blog.content.map((block, index) => {
                        if (block.type === "heading") {
                            return (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    className="font-bold"
                                >
                                    {block.text}
                                </motion.p>
                            );
                        }

                        if (block.type === "paragraph") {
                            return (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: false, amount: 0.1 }}
                                >
                                    {block.text}
                                </motion.p>
                            );
                        }

                        if (block.type === "quote") {
                            return (
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: false, amount: 0.1 }}
                                    className="font-semibold"
                                >
                                    {block.text}
                                </motion.p>
                            );
                        }

                        if (block.type === "list") {
                            return (
                                <ul key={index} className="list-disc pl-6 space-y-2">
                                    {block.items.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            viewport={{ once: false, amount: 0.2 }}
                                        >
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            );
                        }

                        return null;
                    })}
                </div>
            </section>

            {/* GALLERY */}
            {galleryImages?.length > 0 && (
                <section className="bg-white py-10">
                    <div className="w-full max-w-peak mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galleryImages.map((image, index) => (
                                <motion.div
                                    key={index}
                                    variants={galleryVariants}
                                    initial="initial"
                                    whileInView="whileInView"
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: false, amount: 0.2 }}
                                    className="w-full cursor-pointer"
                                    onClick={() => openModal(index)}
                                >
                                    <img
                                        src={image}
                                        alt={`Gallery image ${index + 1}`}
                                        className="w-full h-64 object-cover rounded-lg shadow-md"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm px-4"
                        onClick={closeModal}
                    >
                        {/* Modal Container */}
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute -top-3 -right-3 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white text-red-500 font-bold shadow-lg hover:scale-105 transition"
                            >
                                ✕
                            </button>

                            {/* Image Frame */}
                            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center p-4 md:p-6">

                                {/* Left Control */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-3 md:left-5 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>

                                {/* Image */}
                                <img
                                    src={galleryImages[selectedImageIndex]}
                                    alt={`Gallery image ${selectedImageIndex + 1}`}
                                    className="w-full max-h-[80vh] object-contain rounded-lg"
                                />

                                {/* Right Control */}
                                <button
                                    onClick={nextImage}
                                    className="absolute right-3 md:right-5 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Counter */}
                            <div className="mt-3 text-center text-sm text-white/70">
                                {selectedImageIndex + 1} / {galleryImages.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* RELATED NEWS */}
            <section className="bg-white pb-16 py-6">
                <div className="w-full max-w-peak mx-auto px-4 sm:px-6 md:px-10 lg:px-14">
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: false, amount: 0.1 }}
                        className="font-bold mb-16 text-3xl"
                    >
                        Related News
                    </motion.p>

                    <div className="w-full max-w-4xl mx-auto">
                        <Swiper
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={1}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 2 },
                            }}
                        >
                            {blogs
                                .filter((item) => item.link !== `/blog/${slug}`)
                                .map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <BlogCard theme="dark" blog={item} />
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetailsPage;