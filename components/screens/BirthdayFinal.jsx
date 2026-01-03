"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import ConfettiBlast from "../effects/ConfettiBlast"

export default function BirthdayFinal() {
  const [showTop, setShowTop] = useState(true)

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full w-full text-center px-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* 🎉 CONFETTI */}
      <ConfettiBlast />

      {/* 🎂 TITLE */}
      <motion.h2
        className="text-4xl md:text-5xl font-dancing-script text-white mb-8"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Happy Birthday Anjali 🎂💖
      </motion.h2>

      {/* 📸 IMAGE STACK */}
      <div className="relative w-64 h-64 mb-10">
        {/* Bottom Image */}
        <Image
          src="/image2.jpg"
          fill
          className="rounded-2xl object-cover"
          alt="second"
          priority
        />

        {/* Top Image (slide up to remove) */}
        <AnimatePresence>
          {showTop && (
            <motion.div
              className="absolute inset-0 cursor-grab"
              drag="y"
              dragConstraints={{ top: -200, bottom: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.y < -120) setShowTop(false)
              }}
              exit={{ y: -400, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/image1.jpg"
                fill
                className="rounded-2xl object-cover"
                alt="first"
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 💌 FINAL TEXT */}
      <motion.p
        className="text-2xl md:text-3xl font-dancing-script text-white mt-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        How did
