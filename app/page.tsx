'use client';

import LandingHero from './components/LandingHero';
import { FaFacebookF, FaGithub, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="relative w-full h-full min-h-screen bg-white overflow-x-hidden">
      
      {/* Fixed Logo + Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="fixed top-[64px] left-[45px] right-[45px] z-50 flex items-center justify-between"
      >
        {/* Logo */}
        <div className="text-white font-black text-[36px] tracking-[0.4em] uppercase leading-[36px]">
          AU <br /> RA
        </div>

        {/* Navigation */}
        <nav className="flex gap-[80px] text-white font-black text-[18px] tracking-[0.4em] uppercase leading-[75px]">
          <span className="hover:underline cursor-pointer">PROJECTS</span>
          <span className="hover:underline cursor-pointer">CONTACT</span>
        </nav>
      </motion.header>

      {/* Fixed Social Icons */}
      <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className="fixed top-[650px] left-[45px] flex flex-col gap-[30px] z-50"
    >
      <a
        href="https://github.com/bekkzod1337"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-white w-[28px] h-[28px] hover:scale-110 transition-transform duration-200 cursor-pointer" />
      </a>

      <a
        href="https://t.me/bekzod1337"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegram className="text-white w-[34px] h-[28px] hover:scale-110 transition-transform duration-200 cursor-pointer" />
      </a>

      <a
        href="https://instagram.com/bekkzod1337"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-white w-[28px] h-[28px] hover:scale-110 transition-transform duration-200 cursor-pointer" />
      </a>
    </motion.div>

      {/* Fixed Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 1.2 }}
        className="fixed top-[650px] left-[1400px] flex flex-col items-center z-50"
      >
        <div className="text-white font-black text-[14px] tracking-[0.4em] uppercase rotate-90 leading-[75px] animate-bounce">
          SCROLL
        </div>
        <div className="w-[51px] border-t border-white mt-[10px] rotate-90" />
      </motion.div>

      {/* Main Hero Section */}
      <LandingHero />
    </main>
  );
}
