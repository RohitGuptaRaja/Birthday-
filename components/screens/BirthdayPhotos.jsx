"use client"
import { motion } from "framer-motion"

export default function BirthdayPhotos({ onNext }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center px-4">
      <motion.img
        src="/images/photo1.jpg"
        className="w-64 rounded-xl mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      />

      <motion.img
        src="/images/photo2.jpg"
        className="w-64 rounded-xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      />

      <button
        onClick={onNext}
        className="mt-8 px-6 py-2 bg-pink-500 rounded-full text-white"
      >
        Final Surprise 🎉
      </button>
    </div>
  )
}
