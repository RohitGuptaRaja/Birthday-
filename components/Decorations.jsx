"use client"
import { motion } from "framer-motion"

export default function Decorations() {
  return (
    <>
      {/* 🎊 Flags */}
      <div className="flags">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      {/* 💖 Floating hearts */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.span
          key={i}
          className="heart"
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </>
  )
}
