"use client"

import { motion } from "framer-motion"

export default function BirthdayFinal() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">

      {/* Hug GIF */}
      <motion.img
        src="/gifs/hug.gif"
        alt="hug"
        className="w-48 h-48 mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      />

      {/* Final Text */}
      <motion.h2
        className="text-3xl md:text-4xl font-dancing-script text-white leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        I hope this made you smile, Anjali 🥹💖 <br />
        Because your smile means everything to me
      </motion.h2>

    </div>
  )
}
