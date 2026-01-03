"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export default function BirthdayPhotos({ onNext }) {
  const [index, setIndex] = useState(0)
  const photos = ["/images/photo1.jpg", "/images/photo2.jpg", "/images/photo3.jpg"]

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">

      {/* Sparkle GIF */}
      <motion.img
        src="/gifs/sparkle.gif"
        alt="sparkle"
        className="w-28 h-28 mb-4"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />

      {/* Photo Stack */}
      <div className="relative w-64 h-80 mb-8">
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0"
            drag="y"
            dragConstraints={{ top: -200, bottom: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.y < -120 && index < photos.length - 1) {
                setIndex(index + 1)
              }
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -300 }}
          >
            <Image
              src={photos[index]}
              fill
              className="object-cover rounded-2xl"
              alt="memory"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.button
        onClick={onNext}
        className="bg-linear-to-r from-pink-500 via-rose-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold"
      >
        One last thing 💖
      </motion.button>

    </div>
  )
}
