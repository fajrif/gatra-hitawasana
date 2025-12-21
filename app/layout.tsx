import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Host_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LayoutWrapper } from "./LayoutWrapper"
import "@/styles/globals.css"

const _geist = Geist({ subsets: ["latin"], variable: '--font-geist-sans' })
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono' })
const _hostGrotesk = Host_Grotesk({ subsets: ["latin"], variable: '--font-host-grotesk' })

export const metadata: Metadata = {
  title: "PT Gatra Hita Wasana - IT Konsultan & Inovasi Digital",
  description: "Perusahaan yang unggul dalam menyediakan layanan Teknologi Informasi.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geist.className} ${_geistMono.variable} ${_hostGrotesk.variable} antialiased`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <Analytics />
      </body>
    </html>
  )
}
