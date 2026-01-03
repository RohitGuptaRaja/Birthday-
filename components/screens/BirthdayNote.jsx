"use client"

import { motion } from "framer-motion"

export default function BirthdayNote({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">

      {/* GIF */}
      <motion.img
        src="/gifs/blush.gif"
        alt="blush"
        className="w-44 h-44 mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Text */}
      <motion.p
        className="text-xl md:text-2xl font-dancing-script text-white leading-relaxed mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        You make my world brighter 💕 <br />
        Your smile is my favorite thing 😌 <br />
        And my days are better because of you 💗
      </motion.p>

      {/* Button */}
      <motion.button
        onClick={onNext}
        className="bg-linear-to-r from-pink-500 via-rose-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Something special awaits ✨
      </motion.button>

    </div>
  )
}
