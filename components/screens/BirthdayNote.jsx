"use client"
import { motion } from "framer-motion"

export default function BirthdayNote({ onNext }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.img
        src="/gifs/blush.gif"
        className="w-48 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <p className="text-white text-lg leading-relaxed">
        Tum sirf meri girlfriend nahi ho,<br />
        tum meri strength ho,<br />
        meri smile ho,<br />
        aur meri duniya ho 💖
      </p>

      <button
        onClick={onNext}
        className="mt-8 px-6 py-2 bg-pink-500 rounded-full text-white"
      >
        Memories 📸
      </button>
    </div>
  )
}
