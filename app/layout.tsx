import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://theslingshotfactory.com'),
  title: "The Slingshot Factory - Software Factory of the Future",
  description:
    "We build software that acts as a digital catapult—boosting your personal or business efficiency and helping you achieve more with less effort.",
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/logo.png',
  },
  keywords: [
    "software development",
    "business automation", 
    "digital transformation",
    "custom software",
    "web applications",
    "efficiency tools",
    "productivity software",
    "digital catapult",
    "software consulting",
    "business solutions"
  ],
  authors: [{ name: "The Slingshot Factory" }],
  creator: "The Slingshot Factory",
  publisher: "The Slingshot Factory",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://theslingshotfactory.com',
    siteName: 'The Slingshot Factory',
    title: 'The Slingshot Factory - Software Factory of the Future',
    description: 'We build software that acts as a digital catapult—boosting your personal or business efficiency and helping you achieve more with less effort.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'The Slingshot Factory Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Slingshot Factory - Software Factory of the Future',
    description: 'We build software that acts as a digital catapult—boosting your personal or business efficiency and helping you achieve more with less effort.',
    images: ['/logo.png'],
    creator: '@slingshotfactor',
  },
  alternates: {
    canonical: 'https://theslingshotfactory.com',
  },
  category: 'technology',
  classification: 'Software Development',
  applicationName: 'The Slingshot Factory',
  referrer: 'origin-when-cross-origin',
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
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
