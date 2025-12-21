import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { AdminTable } from '@/components/admin/AdminTable'

export default async function AdminsPage() {
    const session = await getServerSession(authOptions)
    if (!session) {
        redirect('/admin/login')
    }

    const admins = await prisma.admin.findMany({
        select: {
            id: true,
            email: true,
            full_name: true,
            phone: true,
            createdAt: true,
            updatedAt: true,
        },
        orderBy: { createdAt: 'desc' },
    })

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Admin Users</h1>
                    <p className="mt-2 text-gray-600">Manage administrator accounts</p>
                </div>
                <Link href="/admin/admins/new">
                    <Button>Add Admin</Button>
                </Link>
            </div>

            <AdminTable admins={admins} currentUserId={session.user.id} />
        </div>
    )
}
