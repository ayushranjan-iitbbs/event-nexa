"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full flex items-center justify-center bg-black text-white"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-xl">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-pink-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
            EventNexa
          </span>
        </h1>

        <p className="text-lg max-w-2xl mx-auto text-gray-300 mb-8 font-light">
          Discover, join, and create engaging events — powered by real-time collaboration,
          smart filters, and a vibrant community.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-7 py-3 text-lg bg-blue-600 hover:bg-blue-500 rounded-full text-white shadow-lg transition"
        >
      Host Event Now !     
       </motion.button>
      </motion.div>
    </section>
  );
}
