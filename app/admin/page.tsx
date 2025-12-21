import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Users, FileText } from 'lucide-react'

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/admin/login')
    }

    // Get statistics
    const [adminCount, articleCount] = await Promise.all([
        prisma.admin.count(),
        prisma.article.count(),
    ])

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="mt-2 text-gray-600">
                    Welcome back, {session.user.name}!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-primary rounded-md p-3">
                                <Users className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">
                                        Total Admins
                                    </dt>
                                    <dd className="text-3xl font-semibold text-gray-900">
                                        {adminCount}
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-6">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 bg-primary rounded-md p-3">
                                <FileText className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">
                                        Total Articles
                                    </dt>
                                    <dd className="text-3xl font-semibold text-gray-900">
                                        {articleCount}
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                    Quick Start Guide
                </h2>
                <div className="space-y-3 text-sm text-gray-600">
                    <p>• Use the sidebar to navigate between different sections</p>
                    <p>• Manage admin users in the Admins section</p>
                    <p>• Create and publish articles in the Articles section</p>
                    <p>• Organize content using Categories</p>
                    <p>• Click "Change Password" in the top bar to update your profile</p>
                </div>
            </div>
        </div>
    )
}
