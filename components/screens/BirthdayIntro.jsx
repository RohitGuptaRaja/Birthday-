"use client"

import { motion } from "framer-motion"

export default function BirthdayIntro({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">

      {/* GIF */}
      <motion.img
        src="/gifs/hello.gif"
        alt="hello"
        className="w-44 h-44 mb-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-dancing-script text-white mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Someone very cute was born today…
      </motion.h1>

      {/* Sub text */}
      <motion.p
        className="text-lg md:text-xl text-white/80 mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        And I made something just for you 💕
      </motion.p>

      {/* Button */}
      <motion.button
        onClick={onNext}
        className="bg-linear-to-r from-pink-500 via-rose-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Tap to begin 🎀
      </motion.button>

    </div>
  )
}
