"use client"
import { motion } from "framer-motion"

export default function BirthdayWish({ onNext }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.img
        src="/gifs/cake.gif"
        className="w-60 mb-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />

      <h2 className="text-4xl text-pink-400 font-bold">
        🎂 Happy Birthday Anjali 🎂
      </h2>

      <p className="text-white mt-4">
        Tumhari smile meri favourite cheez hai 💕
      </p>

      <button
        onClick={onNext}
        className="mt-8 px-6 py-2 bg-pink-500 rounded-full text-white"
      >
        Next 💌
      </button>
    </div>
  )
}
