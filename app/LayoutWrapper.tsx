'use client'

import { usePathname } from 'next/navigation'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isAdminRoute = pathname?.startsWith('/admin')

    if (isAdminRoute) {
        // Admin routes don't get public navigation/footer
        return <>{children}</>
    }

    // Public routes get navigation and footer
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    )
}
