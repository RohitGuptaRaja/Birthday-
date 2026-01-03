"use client"
import { motion } from "framer-motion"

export default function ConfettiBlast() {
  const confetti = Array.from({ length: 30 })

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-4 bg-pink-400 rounded-sm"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            rotate: 0,
            opacity: 1,
          }}
          animate={{
            y: window.innerHeight + 40,
            rotate: 360,
            opacity: 0,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random(),
          }}
        />
      ))}
    </div>
  )
}
