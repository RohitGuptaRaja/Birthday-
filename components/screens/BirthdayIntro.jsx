"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import HeartRain from "../HeartRain"

export default function BirthdayIntro({ onNext }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 text-center">
      
      <HeartRain />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-sm w-full"
      >
        {/* cute gif */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/shy.gif"   // public/shy.gif
            width={120}
            height={120}
            alt="cute"
            priority
          />
        </div>

        <h1 className="text-3xl font-semibold text-pink-400 mb-3">
          A Cutiepie was born today,
        </h1>

        <h2 className="text-2xl font-semibold text-pink-300 mb-4">
          20 years ago! 🎉
        </h2>

        <p className="text-white/75 text-sm mb-8">
          Yes, it’s you! A little surprise awaits…
        </p>

        <motion.button
          onClick={onNext}
          className="btn-primary w-full"
          whileTap={{ scale: 0.95 }}
        >
          🎁 Start the surprise
        </motion.button>
      </motion.div>
    </div>
  )
}
