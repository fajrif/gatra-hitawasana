import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, DM_Sans, Host_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LayoutWrapper } from "./LayoutWrapper"
import "@/styles/globals.css"

const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-jetbrains-mono' })
const _hostGrotesk = Host_Grotesk({ subsets: ["latin"], variable: '--font-host-grotesk' })
const _dmSans = DM_Sans({ subsets: ["latin"], variable: '--font-dm-sans' })

export const metadata: Metadata = {
  title: "PT Gatra Hita Wasana - IT Konsultan & Inovasi Digital",
  description:
    "Perusahaan yang unggul dalam menyediakan layanan Teknologi Informasi.",
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
      <body className={`${_dmSans.className} ${_hostGrotesk.variable} ${_jetbrainsMono.variable} antialiased`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
        <Analytics />
      </body>
    </html>
  )
}
