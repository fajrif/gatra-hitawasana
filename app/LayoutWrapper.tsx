'use client'

import { usePathname } from 'next/navigation'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { CTASection } from '@/components/cta-section'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isAdminRoute = pathname?.startsWith('/admin')

    // Admin routes don't get public navigation/footer
    if (isAdminRoute) {
        return <>{children}</>
    }

    // Public routes get navigation and footer
    return (
        <>
            <Navigation />
            {children}
            <CTASection />
            <Footer />
        </>
    )
}
