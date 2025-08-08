'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LandingHero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* 🌄 Background Image */}
      <Image
        src="/Background.png"
        alt="Background"
        fill
        className="absolute top-0 left-0 object-cover z-10 opacity-50"
      />

      {/* 📝 Main Text Block */}
      <div className="absolute top-[150px] w-full h-[475px] z-20">

        {/* I AM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-[65px] left-[486px] text-[35px] font-black tracking-[0.3em] uppercase leading-[75px]
                     text-white/80 blur-[1px]"
        >
          I AM
        </motion.div>

        {/* BEKKZOD */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="absolute top-50 left-0 w-full font-black text-[188px] tracking-[0.05em] uppercase leading-[70px] text-center items-center
                     blur-[1px]"
          style={{
            WebkitTextStroke: '1px #ccc',
            color: 'transparent',
            textShadow: '0 0 25px rgba(255, 255, 255, 0.6)',
          }}
        >
          BEKKZOD
        </motion.h1>

        {/* WEB DEVELOPER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute top-[396px] left-[764px] text-[35px] font-black tracking-[0.3em] uppercase leading-[40px]
                     text-white/80 blur-[1px]"
        >
          WEB <br /> Developer
        </motion.div>
      </div>
    </div>
  );
}
