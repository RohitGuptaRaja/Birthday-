import { Quicksand } from "next/font/google"
import "./globals.css"
import BackgroundMusic from "@/components/BackgroundMusic"
import Decorations from "@/components/Decorations"

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "Happy Birthday 💖",
  description: "A special birthday surprise made with love",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-black text-white overflow-hidden`}>
        <BackgroundMusic />
        <Decorations />
        {children}
      </body>
    </html>
  )
}
