import type React from "react"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CTASection } from "@/components/cta-section"
import "@/styles/globals.css"

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navigation />
            {children}
            <CTASection />
            <Footer />
        </>
    )
}
