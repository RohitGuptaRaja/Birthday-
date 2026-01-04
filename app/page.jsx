"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import BirthdayIntro from "../components/screens/BirthdayIntro"
import BirthdayCuriosity from "../components/screens/BirthdayCuriosity"
import BirthdayCompliments from "../components/screens/BirthdayCompliments"
import BirthdayBlast from "../components/screens/BirthdayBlast"
import BirthdayPhoto from "../components/screens/BirthdayPhoto"
import BirthdayNote from "../components/screens/BirthdayNote"
import BirthdayFinal from "../components/screens/BirthdayFinal"

export default function Home() {
  const [screen, setScreen] = useState(0)

  const screens = [
    <BirthdayIntro onNext={() => setScreen(1)} />,
    <BirthdayCuriosity onNext={() => setScreen(2)} />,
    <BirthdayCompliments onNext={() => setScreen(3)} />,
    <BirthdayBlast onNext={() => setScreen(4)} />,
    <BirthdayPhoto onNext={() => setScreen(5)} />,
    <BirthdayNote onNext={() => setScreen(6)} />,
    <BirthdayFinal />,
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-4 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={screen}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-sm mx-auto text-center relative z-10"
        >
          {screens[screen]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
