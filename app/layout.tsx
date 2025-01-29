import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Paunify - Your Spotify Stats Visualized",
  description: "Discover your Spotify listening habits with beautiful visualizations",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

