"use client"

import { motion } from "framer-motion"

const lines = [
  "Tumhari smile meri weakness hai 😌",
  "Tumhari care meri strength 💪",
  "Aur tum… meri favourite person 💖",
]

export default function BirthdayCompliments({ onNext }) {
  return (
    <div className="text-center px-6 space-y-6">
      {lines.map((line, i) => (
        <motion.p
          key={i}
          className="glass-card p-4 text-white text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.4 }}
        >
          {line}
        </motion.p>
      ))}

      <motion.button
        onClick={onNext}
        className="btn-primary mt-6"
      >
        Aage chalo ❤️
      </motion.button>
    </div>
  )
}
