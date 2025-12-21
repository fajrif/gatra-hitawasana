import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { ArticleTable } from '@/components/admin/ArticleTable'

export default async function ArticlesPage() {
    const session = await getServerSession(authOptions)
    if (!session) {
        redirect('/admin/login')
    }

    const articles = await prisma.article.findMany({
        include: {
            category: {
                select: { name: true },
            },
        },
        orderBy: { createdAt: 'desc' },
    })

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Articles</h1>
                    <p className="mt-2 text-gray-600">Manage blog articles</p>
                </div>
                <Link href="/admin/articles/new">
                    <Button>Add Article</Button>
                </Link>
            </div>

            <ArticleTable articles={articles} />
        </div>
    )
}
