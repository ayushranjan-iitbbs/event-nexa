'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/40 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wide">
          <span className="text-white">Event</span>
          <span className="bg-gradient-to-r from-pink-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Nexa
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-pink-400 transition"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="px-4 py-1 border border-white rounded hover:bg-white hover:text-black transition"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-screen w-[80%] sm:w-[60%] bg-[#111] border-r border-gray-700 z-40 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                <span className="text-white">Event</span>
                <span className="bg-gradient-to-r from-pink-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Nexa
                </span>
              </h2>
              <button onClick={toggleMenu}>
                <FiX size={28} className="text-white" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-pink-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/login"
                className="mt-6 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition w-fit"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
