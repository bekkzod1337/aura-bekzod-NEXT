'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LandingHero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white shadow-[2px_4px_9px_10px_rgba(254,254,254,0.75)]">
      {/* Background Image */}
      <Image
        src="/Background.png"
        alt="Background"
        fill
        className="absolute top-0 left-0 object-cover z-0"
      />

      {/* Main Text Block */}
      <div className="absolute top-[150px] w-[1468px] h-[475px] z-10">
        {/* I AM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-[65px] left-[486px] text-[35px] text-white/75 font-black tracking-[0.3em] uppercase leading-[75px]"
        >
          I AM
        </motion.div>

        {/* AURA */}
        <motion.h1
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.6 }}
  className="absolute top-50 left-0 w-full font-black text-[188px] tracking-[0.05em] uppercase leading-[70px] text-center items-center"
  style={{
    WebkitTextStroke: '2px white',
    color: 'transparent',
  }}
>
  BEKKZOD
</motion.h1>


        {/* AN Environmentalist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute top-[396px] left-[764px] text-[35px] text-white/75 font-black tracking-[0.3em] uppercase leading-[40px]"
        >
          WEB <br /> Developer
        </motion.div>
      </div>
    </div>
  );
}
