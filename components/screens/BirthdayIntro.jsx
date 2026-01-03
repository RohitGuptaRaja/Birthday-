import { motion } from "framer-motion"

export default function BirthdayIntro({ onNext }) {
  return (
    <div className="text-center px-6">
      <motion.h1
        className="text-5xl md:text-6xl font-dancing-script text-white mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hey Anjali 🌸
      </motion.h1>

      <motion.p
        className="text-lg text-white/80 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Aaj ka din thoda special hai…
      </motion.p>

      <motion.button
        onClick={onNext}
        className="btn-primary"
        whileTap={{ scale: 0.95 }}
      >
        Tap to continue 💕
      </motion.button>
    </div>
  )
}
