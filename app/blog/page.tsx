import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { format } from 'date-fns'

export default async function BlogPage() {
    const articles = await prisma.article.findMany({
        where: { status: 'PUBLISHED' },
        include: {
            category: { select: { name: true } },
        },
        orderBy: { published_date: 'desc' },
    })

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Latest news and insights
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Link
                            key={article.id}
                            href={`/blog/${article.slug}`}
                            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden"
                        >
                            {article.image && (
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                            <div className="p-6">
                                <div className="text-sm text-primary font-semibold mb-2">
                                    {article.category.name}
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-2">
                                    {article.title}
                                </h2>
                                {article.short_description && (
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {article.short_description}
                                    </p>
                                )}
                                {article.published_date && (
                                    <p className="text-sm text-gray-500">
                                        {format(new Date(article.published_date), 'MMMM dd, yyyy')}
                                    </p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
