"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function BirthdayCake({ onNext }) {
  const [decorated, setDecorated] = useState(false)
  const [lit, setLit] = useState(false)
  const [confettiDone, setConfettiDone] = useState(false)

  return (
    <div className="relative flex flex-col items-center justify-center px-6 text-center overflow-hidden">

      {/* 🎊 Decorations */}
      <AnimatePresence>
        {decorated && (
          <motion.div
            className="flags"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🎂 Cake */}
      <div className="relative mt-24 mb-10">
        <div className="cake">
          {/* Candle */}
          <div className="absolute top-[-28px] left-1/2 -translate-x-1/2 w-[10px] h-[28px] bg-red-500 rounded-sm">
            {lit && <div className="flame" />}
          </div>
        </div>
      </div>

      {/* 🎉 Confetti */}
      <AnimatePresence>
        {lit && !confettiDone && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onAnimationComplete={() => setConfettiDone(true)}
          >
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-2 h-2 rounded-sm bg-pink-400"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: "-10px",
                }}
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: "110vh", rotate: 360 }}
                transition={{
                  duration: 2 + Math.random(),
                  delay: Math.random() * 0.5,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔘 Buttons */}
      {!decorated && (
        <motion.button
          className="btn-primary mt-6"
          whileTap={{ scale: 0.95 }}
          onClick={() => setDecorated(true)}
        >
          🎀 Decorate
        </motion.button>
      )}

      {decorated && !lit && (
        <motion.button
          className="btn-primary mt-6"
          whileTap={{ scale: 0.95 }}
          onClick={() => setLit(true)}
        >
          🔥 Light the Candle
        </motion.button>
      )}

      {confettiDone && (
        <motion.button
          className="btn-primary mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={onNext}
        >
          hookup 💕
        </motion.button>
      )}
    </div>
  )
}
