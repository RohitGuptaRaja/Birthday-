"use client"

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
    <BirthdayIntro next={() => setCurrentScreen(1)} />,
    <BirthdayWish next={() => setCurrentScreen(2)} />,
    <BirthdayNote next={() => setCurrentScreen(3)} />,
    <BirthdayPhotos next={() => setCurrentScreen(4)} />,
    <BirthdayFinal />,
  ]

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentScreen}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {screens[currentScreen]}
      </motion.div>
    </AnimatePresence>
  )
}
