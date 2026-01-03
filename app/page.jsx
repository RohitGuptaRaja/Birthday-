
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import BirthdayIntro from "@/components/screens/BirthdayIntro"
import BirthdayWish from "@/components/screens/BirthdayWish"
import BirthdayNote from "@/components/screens/BirthdayNote"
import BirthdayPhotos from "@/components/screens/BirthdayPhotos"
import BirthdayFinal from "@/components/screens/BirthdayFinal"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const screens = [
    <BirthdayIntro onNext={() => setCurrentScreen(1)} />,
    <BirthdayWish onNext={() => setCurrentScreen(2)} />,
    <BirthdayNote onNext={() => setCurrentScreen(3)} />,
    <BirthdayPhotos onNext={() => setCurrentScreen(4)} />,
    <BirthdayFinal />,
  ]

  return (
    <div className="min-h-screen overflow-hidden bg-black flex items-center justify-center">
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
