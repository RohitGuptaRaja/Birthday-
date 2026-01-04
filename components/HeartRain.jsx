"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function HeartRain() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const arr = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      size: 10 + Math.random() * 8,
    }))
    setHearts(arr)
  }, [])

  return (
    <>
      {hearts.map(h => (
        <motion.div
          key={h.id}
          className="heart"
          style={{
            left: `${h.left}%`,
            width: h.size,
            height: h.size,
          }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{
            duration: 10,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </>
  )
}
