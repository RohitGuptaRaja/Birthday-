import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import BirthdayIntro from "@/components/screens/BirthdayIntro"
import BirthdayWish from "@/components/screens/BirthdayWish"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const screens = [
    <BirthdayIntro key="intro" onNext={() => setCurrentScreen(1)} />,
    <BirthdayWish key="wish" onNext={() => setCurrentScreen(2)} />,
  ]

  return (
    <div className="min-h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {screens[currentScreen]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
