"use client"
import { motion } from "framer-motion"

export default function BirthdayIntro({ onNext }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.img
        src="/gifs/hello.gif"
        className="w-56 mb-6 rounded-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      />

      <motion.h1
        className="text-4xl font-bold text-pink-400"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hey Anjali 💖
      </motion.h1>

      <motion.p
        className="text-white mt-4 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Aaj ka din thoda special hai 😌
      </motion.p>

      <button
        onClick={onNext}
        className="mt-8 px-6 py-2 bg-pink-500 rounded-full text-white"
      >
        Start 🎁
      </button>
    </div>
  )
}
