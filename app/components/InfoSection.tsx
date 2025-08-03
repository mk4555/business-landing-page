"use client";

import { motion } from "framer-motion";
// import { useInView } from "framer-motion";
// import { useRef } from "react";
import LottieAnimation from "./LottieAnimation";
const panels = [
  {
    title: "Incoming Email",
    desc: "New client inquiry received.",
    icon: "📩",
  },
  {
    title: "AI Reply Generated",
    desc: "FlowPilot drafts a professional response.",
    icon: "🤖",
  },
  {
    title: "Follow-Up Scheduled",
    desc: "Automated follow-up added to calendar.",
    icon: "📅",
  },
];

export const InfoSection = () => {
  // const sectionRef = useRef(null);
  // const inView = useInView(sectionRef, { once: true });

  return (
    <section className="bg-gradient-to-b from-[#eef4ff] to-white py-24 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        How FlowPilot Works
      </h2>
      <p className="text-gray-600 mb-10 max-w-xl mx-auto">
        FlowPilot automates your workflow from inbox to issue tracker. Emails?
        Handled. JIRA tickets? Sorted. Approvals, responses, follow-ups? Done —
        by AI. FlowPilot saves teams hours every day by eliminating repetitive
        tasks, so they can focus on the work that actually matters.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="max-w-md mx-auto mb-12"
      >
        <LottieAnimation />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {panels.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-4xl mb-3">{card.icon}</div>
            <h3 className="font-semibold text-lg text-gray-800 mb-1">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
