"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Confetti from "react-confetti"

export default function CakeScreen({ onNext }) {
  const [lit, setLit] = useState(false)

  return (
    <div className="h-screen w-screen flex items-center justify-center relative">
      {lit && <Confetti numberOfPieces={300} recycle={false} />}

      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="glass-card px-6 py-10 text-center w-[320px]"
      >
        {/* 🎂 Cake */}
        <div className="relative flex justify-center">
          <div className="cake">
            {lit && <span className="flame" />}
          </div>
        </div>

        {/* 🎉 Text */}
        {lit && (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-2xl text-pink-400 font-bold"
          >
            Happy Birthday, Anjali 💖
          </motion.h2>
        )}

        {/* 🔘 Button */}
        {!lit ? (
          <button
            onClick={() => setLit(true)}
            className="btn-primary mt-8"
          >
            🔥 Light the Candle
          </button>
        ) : (
          <button
            onClick={onNext}
            className="btn-primary mt-6"
          >
            Next →
          </button>
        )}
      </motion.div>
    </div>
  )
}
