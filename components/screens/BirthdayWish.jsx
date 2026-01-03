"use client"

import { motion } from "framer-motion"

export default function BirthdayWish({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">

      {/* Cake GIF */}
      <motion.img
        src="/gifs/cake.gif"
        alt="cake"
        className="w-48 h-48 mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      />

      {/* Birthday Text */}
      <motion.h2
        className="text-4xl md:text-5xl font-dancing-script text-white mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Happy Birthday Anjali 🎂💖
      </motion.h2>

      <motion.p
        className="text-lg text-white/80 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        8 April — a very special day ✨
      </motion.p>

      {/* Button */}
      <motion.button
        onClick={onNext}
        className="bg-linear-to-r from-pink-500 via-rose-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        I have more for you 💝
      </motion.button>

    </div>
  )
}
