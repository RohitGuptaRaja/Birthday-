"use client"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="glass-card text-center px-6 py-10"
      >
        <h1 className="text-3xl font-bold text-pink-400">
          Birthday Surprise 🎂
        </h1>
        <p className="mt-3 text-gray-300">
          Part 1 setup completed 💖
        </p>
      </motion.div>
    </main>
  )
}
