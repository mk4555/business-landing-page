"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh]  flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100">
      <div className="mb-6 ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold  text-gray-900"
        >
          {"Let AI pilot your reptitive tasks"}
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="mt-3 text-lg md:text-xl text-gray-700 max-w-3xl"
      >
        Our AI-driven platform streamlines your repetitive tasks and workflows,
        freeing your team to focus on what matters most — innovation and growth.
      </motion.p>

      <div className="mt-6 flex gap-4">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="px-8 py-4 rounded-full text-white text-lg font-medium bg-blue-600 hover:bg-blue-700 shadow-md transition cursor-pointer"
        >
          Get started
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
