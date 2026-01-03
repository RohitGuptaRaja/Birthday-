"use client"

import { motion } from "framer-motion"

export default function BirthdayCuriosity({ onNext }) {
  return (
    <div className="text-center px-6">
      <motion.p
        className="text-3xl font-dancing-script text-white mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Tum soch rahi hogi…  
        <br /> “ye kya hai?” 😅
      </motion.p>

      <motion.button onClick={onNext} className="btn-primary">
        Dekhte hain 👀
      </motion.button>
    </div>
  )
}
