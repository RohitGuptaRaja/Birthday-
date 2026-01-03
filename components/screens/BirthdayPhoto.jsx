"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function BirthdayPhoto({ onNext }) {
  return (
    <div className="text-center px-6">
      <motion.div
        className="glass-card p-4 mb-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Image
          src="/images/photo1.jpg"   // ✅ CORRECT PATH
          width={300}
          height={400}
          className="rounded-xl object-cover"
          alt="Anjali"
          priority
        />
      </motion.div>

      <p className="text-white/80 mb-6">
        Meri favourite tasveer ❤️
      </p>

      <motion.button
        onClick={onNext}
        className="btn-primary"
        whileTap={{ scale: 0.95 }}
      >
        Last part 💌
      </motion.button>
    </div>
  )
}
