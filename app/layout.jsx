import { Quicksand } from "next/font/google"
import "./globals.css"

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata = {
  title: "Happy Birthday Anjali 💖",
  description: "A special birthday surprise made with love",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-black text-white overflow-hidden`}>
        {children}
      </body>
    </html>
  )
}
