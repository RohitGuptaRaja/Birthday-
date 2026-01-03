"use client"

import { motion } from "framer-motion"

export default function BirthdayFinal() {
  return (
    <div className="text-center px-6">
      <motion.h2
        className="text-5xl font-dancing-script text-white mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Once again 💕
      </motion.h2>

      <motion.p className="text-white/80">
        Happy Birthday Anjali 🎂  
        <br />
        How did you like it,  
        my cutie pie 😅❤️
      </motion.p>
    </div>
  )
}
