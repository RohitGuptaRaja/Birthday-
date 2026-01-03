"use client"
import { useEffect, useRef } from "react"

export default function BackgroundMusic() {
  const audioRef = useRef(null)

  useEffect(() => {
    const play = () => {
      audioRef.current.volume = 0.4
      audioRef.current.play().catch(() => {})
    }

    document.addEventListener("click", play)
    return () => document.removeEventListener("click", play)
  }, [])

  return (
    <audio ref={audioRef} loop>
      <source src="/music.mp3" type="audio/mpeg" />
    </audio>
  )
}
