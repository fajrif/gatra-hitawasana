import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import Link from 'next/link'
import { ChevronRight, Calendar, Clock, ArrowLeft } from 'lucide-react'
import { GallerySlider } from '@/components/ui/gallery-slider'

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
        <div className="min-h-screen bg-black">
            {/* Banner Section */}
            <div className="relative overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-black" />

                {/* Noise Texture Overlay */}
                <div
                    className="absolute inset-0 opacity-30 mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    }}
                />

                {/* Subtle Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[100px] rounded-full" />

                {/* Content */}
                <div className="relative mx-auto max-w-4xl px-4 pt-32 pb-16 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-1 text-sm font-light text-white/60 mb-6">
                        <Link href="/" className="hover:text-white/80 transition-colors">
                            Home
                        </Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link href="/media" className="hover:text-white/80 transition-colors">
                            Media
                        </Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-white/80 truncate max-w-[200px]">{article.title}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/70">
                            {article.category.name}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-tight text-white mb-6">
                        {article.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex items-center gap-6 text-sm text-white/50">
                        {article.published_date && (
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{format(new Date(article.published_date), 'd MMMM yyyy', { locale: id })}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>5 min read</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <article className="bg-black pb-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Featured Image or Gallery Slider */}
                    {article.gallery_images && article.gallery_images.length > 0 ? (
                        <div className="mb-12">
                            <GallerySlider
                                images={article.gallery_images}
                                alt={article.title}
                            />
                        </div>
                    ) : article.image ? (
                        <div className="mb-12 rounded-2xl overflow-hidden border border-white/10">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    ) : null}

                    {/* Content */}
                    <div
                        className="space-y-4 prose prose-invert max-w-none
                            prose-headings:font-light prose-headings:text-white prose-headings:tracking-tight
                            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                            prose-p:text-white/70 prose-p:font-light prose-p:leading-relaxed
                            prose-a:text-white prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-white/80
                            prose-strong:text-white prose-strong:font-medium
                            prose-ul:text-white/70 prose-ol:text-white/70
                            prose-li:font-light prose-li:marker:text-white/40
                            prose-blockquote:border-white/20 prose-blockquote:text-white/60 prose-blockquote:font-light
                            prose-code:text-white/80 prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                            prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 text-white"
                        dangerouslySetInnerHTML={{ __html: article.content || '' }}
                    />

                    {/* Back to Media */}
                    <div className="mt-16 pt-8 border-t border-white/10">
                        <Link
                            href="/media"
                            className="inline-flex items-center gap-2 text-white/60 font-light hover:text-white transition-colors"
                        >
                            <ArrowLeft size={18} />
                            Kembali ke Media
                        </Link>
                    </div>
                </div>
            </article>

        </div>
    )
}
