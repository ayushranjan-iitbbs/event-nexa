"use client";

import { motion } from "framer-motion";

export default function Highlights() {
  return (
    <section className="py-24 bg-[#0f1115] text-center text-white px-4">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Empowering Events Everywhere with{" "}
        <span className="text-white">Event</span>
        <span className="text-[#5ac8fa]">Nexa</span>
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        EventNexa helps you organize, engage, and scale your events with modern tech —
        seamlessly and smartly.
      </motion.p>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <button className="px-7 py-3 rounded-full bg-[#5ac8fa] text-black font-semibold hover:shadow-[0_0_20px_#5ac8fa] transition duration-300">
          Start Hosting
        </button>
      </motion.div>
    </section>
  );
}
