import { Quicksand } from "next/font/google"
import "./globals.css"
import BackgroundMusic from "../components/BackgroundMusic"

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "Happy Birthday Anjali 💖",
  description: "A special birthday surprise",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-black antialiased`}>
        <BackgroundMusic />
        {children}
      </body>
    </html>
  )
}
