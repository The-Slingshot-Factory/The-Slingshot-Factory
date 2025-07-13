import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "The Slingshot Factory - Software Factory of the Future",
  description:
    "We build software that acts as a digital catapult—boosting your personal or business efficiency and helping you achieve more with less effort.",
  keywords: "software development, business automation, digital transformation, custom software, web applications",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
