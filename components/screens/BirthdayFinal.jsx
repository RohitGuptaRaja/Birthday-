"use client"
import { motion } from "framer-motion"

export default function BirthdayFinal() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">

      {/* ❤️ Heart rain */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-500 text-2xl"
          initial={{ y: -50, x: Math.random() * 400 }}
          animate={{ y: "110vh" }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
          }}
        >
          ❤️
        </motion.div>
      ))}

      <motion.img
        src="/gifs/hug.gif"
        className="w-64 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      />

      <h1 className="text-4xl font-bold text-pink-400">
        I Love You Anjali 💖
      </h1>

      <p className="text-white mt-4">
        Happy Birthday meri jaan 🎂  
        Hamesha aise hi muskurati rehna 😘
      </p>
    </div>
  )
}
