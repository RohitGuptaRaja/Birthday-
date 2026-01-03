"use client"
import { useState } from "react"
import CakeScreen from "@/components/CakeScreen"

export default function Home() {
  const [screen, setScreen] = useState(1)

  return (
    <>
      {screen === 1 && (
        <CakeScreen onNext={() => setScreen(2)} />
      )}
    </>
  )
}
