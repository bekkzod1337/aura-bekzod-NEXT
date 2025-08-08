'use client';

import LandingHero from './components/LandingHero';
import { FaGithub, FaTelegram, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="relative w-full h-full min-h-screen overflow-hidden bg-black">

      {/* 🎥 Background Video (front layer) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-50 pointer-events-none"
      >
        <source src="/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔝 Navbar with blur and transparency */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="fixed top-[20px] left-[45px] right-[45px] z-[60] flex items-center justify-between
                   backdrop-blur-md bg-black/30 rounded-xl px-6 py-2"
      >
        {/* Logo */}
        <div className="text-white font-black text-[36px] tracking-[0.4em] uppercase leading-[36px]">
          AU <br /> RA
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-[80px] mt-[-30px] text-white font-black text-[18px] tracking-[0.4em] uppercase leading-[75px]">
          {/* PROJECTS */}
          <span className="relative px-1 py-2 cursor-pointer group overflow-hidden">
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white z-10" />
            <span className="absolute bottom-0 left-[-100%] w-full h-[2px] bg-gradient-to-r from-transparent via-[#00FFF0] to-transparent z-20 animate-border-glowunderline" />
            <span className="relative z-30">PROJECTS</span>
          </span>

          {/* CONTACT */}
          <span className="relative px-4 py-2 cursor-pointer group overflow-hidden">
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white z-10" />
            <span className="absolute bottom-0 left-[-100%] w-full h-[2px] bg-gradient-to-r from-transparent via-[#00FFF0] to-transparent z-20 animate-border-glowunderline" />
            <span className="relative z-30">CONTACT</span>
          </span>
        </nav>
      </motion.header>

      {/* 🌐 Social Icons - left blur box */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="fixed top-[650px] left-[45px] flex flex-col gap-[30px] z-[600]
                   blur-[1px] p-4 rounded-xl cursor-pointer group overflow-hidden"
      >
        <a href="https://github.com/bekkzod1337" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white w-[28px] h-[28px] hover:scale-110 transition-transform duration-200 cursor-pointer" />
        </a>
        <a href="https://t.me/bekzod1337" target="_blank" rel="noopener noreferrer">
          <FaTelegram className="text-white w-[34px] h-[28px] hover:scale-110 transition-transform duration-200 cursor-pointer" />
        </a>
        <a href="https://instagram.com/bekkzod1337" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white w-[28px] h-[28px] hover:scale-110 transition-transform duration-200 cursor-pointer" />
        </a>
      </motion.div>

      {/* 🖱️ Scroll Indicator - right blur box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3, delay: 1.2 }}
        className="fixed top-[650px] left-[1400px] flex flex-col items-center z-[60]
                   backdrop-blur-md bg-black/30 p-4 rounded-xl"
      >
        <div className="text-white font-black text-[14px] tracking-[0.4em] uppercase rotate-90 leading-[75px] animate-bounce">
          SCROLL
        </div>
        <div className="w-[51px] border-t border-white mt-[10px] rotate-90" />
      </motion.div>

      {/* 🧱 Main Hero Section */}
      <div className="relative z-[60]">
        <LandingHero />
      </div>
    </main>
  );
}
