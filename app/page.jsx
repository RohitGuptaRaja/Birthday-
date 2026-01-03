"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import BirthdayIntro from "../components/screens/BirthdayIntro"
import BirthdayWish from "../components/screens/BirthdayWish"
import BirthdayNote from "../components/screens/BirthdayNote"
import BirthdayPhotos from "../components/screens/BirthdayPhotos"
import BirthdayFinal from "../components/screens/BirthdayFinal"

export default function Home() {
  const [screen, setScreen] = useState(0)

  const screens = [
    <BirthdayIntro onNext={() => setScreen(1)} />,
    <BirthdayWish onNext={() => setScreen(2)} />,
    <BirthdayNote onNext={() => setScreen(3)} />,
    <BirthdayPhotos onNext={() => setScreen(4)} />,
    <BirthdayFinal />,
  ]

  return (
    <div className="min-h-screen flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {screens[screen]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
