"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function BirthdayBlast({ onNext }) {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const generated = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      size: 10 + Math.random() * 10,
    }))
    setHearts(generated)
  }, [])

  return (
    <div className="relative text-center px-6 overflow-hidden">

      <motion.h2
        className="text-5xl font-dancing-script text-white mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        Surprise 🎉💖
      </motion.h2>

      <motion.p
        className="text-white/80 text-lg mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Ye moment sirf tumhare liye hai ✨
      </motion.p>

      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="heart"
          style={{ left: `${h.left}%`, width: h.size, height: h.size }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{ duration: 4, delay: h.delay, repeat: Infinity }}
        />
      ))}

      <motion.button
        onClick={onNext}
        className="btn-primary mt-12 relative z-10"
      >
        Next 💕
      </motion.button>
    </div>
  )
}
