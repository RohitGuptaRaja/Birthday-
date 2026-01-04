"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function BirthdayBlast({ onNext }) {
  const [step, setStep] = useState(0)
  const [hearts, setHearts] = useState([])

  /* 💖 continuous floating hearts */
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Math.random(),
          left: Math.random() * 100,
          size: 10 + Math.random() * 10,
        },
      ])
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative text-center px-6 overflow-hidden">

      {/* 💕 BACKGROUND HEARTS */}
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="heart"
          style={{ left: `${h.left}%`, width: h.size, height: h.size }}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{ duration: 6, ease: "linear" }}
        />
      ))}

      {/* 🎂 CAKE */}
      <motion.div
        className="mx-auto mb-10 relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <div className="cake mx-auto">
          {/* 🔥 Candle */}
          {step >= 2 && <div className="flame" />}
        </div>
      </motion.div>

      {/* 🎉 TEXT */}
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.p
            key="step0"
            className="text-white/80 text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Aaj ka din thoda zyada special hai 🎂
          </motion.p>
        )}

        {step === 1 && (
          <motion.p
            key="step1"
            className="text-white/80 text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Cake thoda decorate karte hain 😌✨
          </motion.p>
        )}

        {step === 2 && (
          <motion.p
            key="step2"
            className="text-white/80 text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Candle light karo… wish ke saath 💖
          </motion.p>
        )}

        {step === 3 && (
          <motion.p
            key="step3"
            className="text-white/80 text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Surpriseeeeee 🎉🎉🎉
          </motion.p>
        )}
      </AnimatePresence>

      {/* 🔘 BUTTONS */}
      <div className="relative z-10">
        {step === 0 && (
          <motion.button
            className="btn-primary"
            whileTap={{ scale: 0.95 }}
            onClick={() => setStep(1)}
          >
            Decorate 🎀
          </motion.button>
        )}

        {step === 1 && (
          <motion.button
            className="btn-primary"
            whileTap={{ scale: 0.95 }}
            onClick={() => setStep(2)}
          >
            Light the candle 🔥
          </motion.button>
        )}

        {step === 2 && (
          <motion.button
            className="btn-primary"
            whileTap={{ scale: 0.95 }}
            onClick={() => setStep(3)}
          >
            Boom 🎊
          </motion.button>
        )}

        {step === 3 && (
          <motion.button
            className="btn-primary"
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
          >
            Next 💕
          </motion.button>
        )}
      </div>
    </div>
  )
}
