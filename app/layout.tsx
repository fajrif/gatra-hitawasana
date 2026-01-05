import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Host_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

const geist = Geist({ subsets: ["latin"], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono' })
const hostGrotesk = Host_Grotesk({ subsets: ["latin"], variable: '--font-host-grotesk' })

export const metadata: Metadata = {
    title: "PT Gatra Hita Wasana - Mitra Teknologi Terpercaya",
    description: "Perusahaan yang unggul dalam menyediakan layanan Teknologi Informasi.",
    metadataBase: new URL("https://gatrahitawasana.com"),
    openGraph: {
        title: "PT Gatra Hita Wasana - Mitra Teknologi Terpercaya",
        description: "Perusahaan yang unggul dalam menyediakan layanan Teknologi Informasi.",
        url: "https://gatrahitawasana.com",
        siteName: "PT Gatra Hita Wasana",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "PT Gatra Hita Wasana Logo",
            },
        ],
        locale: "id_ID",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "PT Gatra Hita Wasana - Mitra Teknologi Terpercaya",
        description: "Perusahaan yang unggul dalam menyediakan layanan Teknologi Informasi.",
        images: ["/images/og-image.png"],
    },
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
            <body className={`${geist.className} ${geistMono.variable} ${hostGrotesk.variable} antialiased`}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
