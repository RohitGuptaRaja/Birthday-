"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function BirthdayIntro({ onNext }) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">

      {/* 💕 Floating Hearts */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* 🧸 Shy Gif */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <Image
          src="/shy.gif"   // 👉 shy gif yahan
          alt="cute"
          width={120}
          height={120}
        />
      </motion.div>

      {/* ✨ Main Text */}
      <motion.h1
        className="text-3xl md:text-4xl font-semibold text-pink-400 mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        A cutiepie was born today,
        <br /> 20 years ago!
      </motion.h1>

      {/* 🥹 Sub text */}
      <motion.p
        className="text-sm text-white/70 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Yes, it’s YOU! A little surprise awaits…
      </motion.p>

      {/* 🎀 Button */}
      <motion.button
        onClick={onNext}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 rounded-full text-white font-medium
                   bg-gradient-to-r from-pink-500 to-pink-400
                   shadow-lg shadow-pink-500/40"
      >
        🎁 Start the surprise
      </motion.button>
    </div>
  )
}
