"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import ConfettiBlast from "../effects/ConfettiBlast"

export default function BirthdayFinal() {
  const [showTop, setShowTop] = useState(true)

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen w-full text-center px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* 🎉 CONFETTI */}
      <ConfettiBlast />

      {/* 🎂 TITLE */}
      <motion.h1
        className="text-4xl md:text-5xl font-dancing-script text-white mb-6"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Happy Birthday Anjali 🎂💖
      </motion.h1>

      {/* 👋 HELLO GIF */}
      <motion.img
        src="/gifs/hello.gif"
        alt="hello"
        className="w-32 mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      />

      {/* 📸 IMAGE STACK */}
      <div className="relative w-72 h-80 mb-8">
        {/* Bottom image */}
        <Image
          src="/images/photo2.jpg"
          fill
          className="rounded-2xl object-cover"
          alt="photo2"
          priority
        />

        {/* Top image (slide up) */}
        <AnimatePresence>
          {showTop && (
            <motion.div
              className="absolute inset-0 cursor-grab"
              drag="y"
              dragConstraints={{ top: -250, bottom: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.y < -120) setShowTop(false)
              }}
              exit={{ y: -500, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/photo1.jpg"
                fill
                className="rounded-2xl object-cover"
                alt="photo1"
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 💕 HUG GIF */}
      {!showTop && (
        <motion.img
          src="/gifs/hug.gif"
          alt="hug"
          className="w-40 mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        />
      )}

      {/* 💌 MESSAGE */}
      <motion.p
        className="text-2xl md:text-3xl font-dancing-script text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        You are my favorite reason to smile 😭❤️
      </motion.p>

      {/* 🎂 CAKE GIF */}
      <motion.img
        src="/gifs/cake.gif"
        alt="cake"
        className="w-28 mt-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      />
    </motion.div>
  )
}
