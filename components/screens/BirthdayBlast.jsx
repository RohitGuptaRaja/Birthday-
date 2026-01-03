"use client"

import { motion } from "framer-motion"

export default function BirthdayBlast({ onNext }) {
  return (
    <div className="text-center px-6">
      <div className="cake mx-auto mb-6 relative">
        <div className="flame" />
      </div>

      <motion.h2
        className="text-5xl font-dancing-script text-white mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        Happy Birthday Anjali 🎉
      </motion.h2>

      <motion.p className="text-white/80 mb-6">
        Aaj duniya ko tum mili thi 🌍
      </motion.p>

      <motion.button onClick={onNext} className="btn-primary">
        Ek surprise aur 🎁
      </motion.button>
    </div>
  )
}
