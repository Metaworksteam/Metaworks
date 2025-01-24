"use client"

import { Inter } from "next/font/google"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { metadata } from "./layout-metadata"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
