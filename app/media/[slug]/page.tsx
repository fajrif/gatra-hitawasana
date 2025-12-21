import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { format } from 'date-fns'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const article = await prisma.article.findUnique({
        where: { slug, status: 'PUBLISHED' },
    })

    if (!article) return {}

    return {
        title: article.meta_title || article.title,
        description: article.meta_description || article.short_description || '',
    }
}

export default async function MediaPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const article = await prisma.article.findUnique({
        where: { slug },
        include: {
            category: { select: { name: true } },
        },
    })

    if (!article || article.status !== 'PUBLISHED') {
        notFound()
    }

    return (
        <article className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {article.image && (
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-96 object-cover"
                        />
                    )}

                    <div className="p-8">
                        <div className="mb-4">
                            <span className="text-sm font-semibold text-primary">
                                {article.category.name}
                            </span>
                            {article.published_date && (
                                <span className="text-sm text-gray-500 ml-4">
                                    {format(new Date(article.published_date), 'MMMM dd, yyyy')}
                                </span>
                            )}
                        </div>

                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {article.title}
                        </h1>

                        {article.short_description && (
                            <p className="text-xl text-gray-600 mb-8">
                                {article.short_description}
                            </p>
                        )}

                        <div
                            className="prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary prose-strong:text-gray-900"
                            dangerouslySetInnerHTML={{ __html: article.content || '' }}
                        />
                    </div>
                </div>
            </div>
        </article>
    )
}
