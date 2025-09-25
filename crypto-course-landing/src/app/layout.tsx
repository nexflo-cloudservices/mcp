import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CryptoMaster Academy - Master Cryptocurrency Trading & Investment",
  description: "Learn cryptocurrency trading, blockchain technology, and investment strategies from industry experts. Join thousands of successful students in our comprehensive crypto course.",
  keywords: "cryptocurrency, crypto trading, blockchain, bitcoin, ethereum, investment, course",
  authors: [{ name: "CryptoMaster Academy" }],
  creator: "CryptoMaster Academy",
  publisher: "CryptoMaster Academy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cryptomaster-academy.com",
    siteName: "CryptoMaster Academy",
    title: "CryptoMaster Academy - Master Cryptocurrency Trading & Investment",
    description: "Learn cryptocurrency trading, blockchain technology, and investment strategies from industry experts.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CryptoMaster Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CryptoMaster Academy - Master Cryptocurrency Trading & Investment",
    description: "Learn cryptocurrency trading, blockchain technology, and investment strategies from industry experts.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
      </body>
    </html>
  )
}