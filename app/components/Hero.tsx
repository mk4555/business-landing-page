"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center">
      <div className="mb-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-outfit font-bold text-gray-900 leading-tight"
        >
          Automate the Grind.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-outfit font-bold text-gray-900 leading-tight"
        >
          Scale What Matters.
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="mt-3 text-md md:text-xl text-gray-700 max-w-3xl "
      >
        FlowPilot is your AI copilot — handling emails, JIRA tickets, and the
        grind behind the scenes — so you can focus on the flight path ahead.
      </motion.p>

      <div className="mt-6 flex gap-4">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl text-lg shadow-md cursor-pointer"
        >
          Get started
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
