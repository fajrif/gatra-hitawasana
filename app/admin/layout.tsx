'use client'

import type React from 'react'
import { SessionProvider, useSession, signOut } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
    LayoutDashboard,
    Users,
    FileText,
    FolderOpen,
    LogOut,
    Menu,
    X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ChangePasswordDialog } from '@/components/admin/ChangePasswordDialog'

const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Admins', href: '/admin/admins', icon: Users },
    { name: 'Articles', href: '/admin/articles', icon: FileText },
    { name: 'Categories', href: '/admin/categories', icon: FolderOpen },
]

function AdminLayoutContent({
    children,
}: {
    children: React.ReactNode
}) {
    const { data: session, status } = useSession()
    const pathname = usePathname()
    const router = useRouter()
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [changePasswordOpen, setChangePasswordOpen] = useState(false)

    // Check if we're on the login page
    const isLoginPage = pathname === '/admin/login'

    // Handle authentication redirects in useEffect to avoid setState during render
    useEffect(() => {
        if (status === 'unauthenticated' && !isLoginPage) {
            router.push('/admin/login')
        }
    }, [status, router, isLoginPage])

    if (status === 'loading') {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">Loading...</div>
            </div>
        )
    }

    // Allow login page to render even when unauthenticated
    if (status === 'unauthenticated' && !isLoginPage) {
        return null
    }

    // If on login page, just render the children without the admin layout
    if (isLoginPage) {
        return <>{children}</>
    }

    const handleLogout = async () => {
        await signOut({ callbackUrl: '/admin/login' })
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Sidebar for desktop */}
            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                <div className="flex flex-col flex-grow bg-primary text-white overflow-y-auto">
                    <div className="flex items-center flex-shrink-0 px-4 py-6">
                        <h1 className="text-xl font-bold">Admin Panel</h1>
                    </div>
                    <nav className="flex-1 px-2 pb-4 space-y-1">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href
                            const Icon = item.icon
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`
                    group flex items-center px-3 py-3 text-sm font-medium rounded-md
                    ${isActive
                                            ? 'bg-primary-foreground/10 text-white'
                                            : 'text-white/80 hover:bg-primary-foreground/5 hover:text-white'
                                        }
                  `}
                                >
                                    <Icon className="mr-3 h-5 w-5" />
                                    {item.name}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </div>

            {/* Mobile sidebar */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-40 flex md:hidden">
                    <div
                        className="fixed inset-0 bg-gray-600 bg-opacity-75"
                        onClick={() => setSidebarOpen(false)}
                    />
                    <div className="relative flex-1 flex flex-col max-w-xs w-full bg-primary">
                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                            <button
                                type="button"
                                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={() => setSidebarOpen(false)}
                            >
                                <X className="h-6 w-6 text-white" />
                            </button>
                        </div>
                        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                            <div className="flex-shrink-0 flex items-center px-4">
                                <h1 className="text-xl font-bold text-white">Admin Panel</h1>
                            </div>
                            <nav className="mt-5 px-2 space-y-1">
                                {navigation.map((item) => {
                                    const isActive = pathname === item.href
                                    const Icon = item.icon
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={`
                        group flex items-center px-3 py-3 text-sm font-medium rounded-md
                        ${isActive
                                                    ? 'bg-primary-foreground/10 text-white'
                                                    : 'text-white/80 hover:bg-primary-foreground/5 hover:text-white'
                                                }
                      `}
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            <Icon className="mr-3 h-5 w-5" />
                                            {item.name}
                                        </Link>
                                    )
                                })}
                            </nav>
                        </div>
                    </div>
                </div>
            )}

            {/* Main content */}
            <div className="md:pl-64 flex flex-col flex-1">
                <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
                    <button
                        type="button"
                        className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>

                {/* Top navigation bar */}
                <div className="bg-white shadow-sm">
                    <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                        <div className="flex-1" />
                        <div className="flex items-center space-x-4">
                            <div className="text-sm text-gray-700">
                                {session?.user?.name} ({session?.user?.email})
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setChangePasswordOpen(true)}
                            >
                                Change Password
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleLogout}
                                className="flex items-center"
                            >
                                <LogOut className="mr-2 h-4 w-4" />
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Page content */}
                <main className="flex-1">
                    <div className="py-6">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            {children}
                        </div>
                    </div>
                </main>
            </div>

            {/* Change password dialog */}
            <ChangePasswordDialog
                open={changePasswordOpen}
                onOpenChange={setChangePasswordOpen}
                userId={session?.user?.id || ''}
            />
        </div>
    )
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SessionProvider>
            <AdminLayoutContent>{children}</AdminLayoutContent>
        </SessionProvider>
    )
}
