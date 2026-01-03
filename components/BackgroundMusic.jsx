"use client"
import { useEffect, useRef } from "react"

export default function BackgroundMusic() {
  const audioRef = useRef(null)

  useEffect(() => {
    const play = () => {
      audioRef.current?.play().catch(() => {})
    }
    play()
    document.addEventListener("click", play)
    return () => document.removeEventListener("click", play)
  }, [])

  return <audio ref={audioRef} src="/music.mp3" loop />
}
