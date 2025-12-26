import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { prisma } from '@/lib/prisma'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import Link from 'next/link'
import { ChevronRight, Briefcase, MapPin, Clock, DollarSign, ArrowLeft, Mail, Calendar } from 'lucide-react'

const employmentTypeLabels: Record<string, string> = {
    FULL_TIME: 'Full-time',
    PART_TIME: 'Part-time',
    CONTRACT: 'Contract',
    INTERNSHIP: 'Internship',
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const career = await prisma.career.findUnique({
        where: { slug, status: 'PUBLISHED' },
    })

    if (!career) return {}

    return {
        title: career.meta_title || `${career.title} - Career`,
        description: career.meta_description || career.short_description || '',
    }
}

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const career = await prisma.career.findUnique({
        where: { slug },
    })

    if (!career || career.status !== 'PUBLISHED') {
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
                        <Link href="/career" className="hover:text-white/80 transition-colors">
                            Karir
                        </Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-white/80 truncate max-w-[200px]">{career.title}</span>
                    </div>

                    {/* Department Badge */}
                    <div className="mb-6">
                        <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/70">
                            {career.department}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-tight tracking-tight text-white mb-6">
                        {career.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{career.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>{employmentTypeLabels[career.employment_type]}</span>
                        </div>
                        {career.salary_range && (
                            <div className="flex items-center gap-2">
                                <DollarSign size={16} />
                                <span>{career.salary_range}</span>
                            </div>
                        )}
                        {career.published_date && (
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{format(new Date(career.published_date), 'd MMMM yyyy', { locale: id })}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <article className="bg-black py-16 px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Short Description */}
                    {career.short_description && (
                        <p className="text-xl font-light text-white/70 leading-relaxed mb-10 pb-10 border-b border-white/10">
                            {career.short_description}
                        </p>
                    )}

                    {/* Apply Card - Mobile sticky */}
                    <div className="lg:hidden mb-10 p-6 rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)]">
                        <h3 className="text-lg font-light text-white mb-3">Tertarik dengan posisi ini?</h3>
                        <p className="text-white/50 text-sm font-light mb-4">
                            Kirimkan CV dan portfolio Anda ke tim HR kami.
                        </p>
                        <a
                            href="mailto:career@gatrahs.com"
                            className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 rounded-full bg-white text-black font-light hover:bg-white/90 transition-colors"
                        >
                            <Mail size={16} />
                            Lamar Sekarang
                        </a>
                    </div>

                    {/* Job Description */}
                    {career.content && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-light text-white mb-6">Deskripsi Pekerjaan</h2>
                            <div
                                className="prose prose-invert max-w-none
                                    prose-headings:font-light prose-headings:text-white prose-headings:tracking-tight
                                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                                    prose-p:text-white/70 prose-p:font-light prose-p:leading-relaxed
                                    prose-a:text-white prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-white/80
                                    prose-strong:text-white prose-strong:font-medium
                                    prose-ul:text-white/70 prose-ol:text-white/70
                                    prose-li:font-light prose-li:marker:text-white/40
                                    prose-blockquote:border-white/20 prose-blockquote:text-white/60 prose-blockquote:font-light"
                                dangerouslySetInnerHTML={{ __html: career.content }}
                            />
                        </div>
                    )}

                    {/* Requirements */}
                    {career.requirements && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-light text-white mb-6">Persyaratan</h2>
                            <div
                                className="prose prose-invert max-w-none
                                    prose-headings:font-light prose-headings:text-white prose-headings:tracking-tight
                                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                                    prose-p:text-white/70 prose-p:font-light prose-p:leading-relaxed
                                    prose-strong:text-white prose-strong:font-medium
                                    prose-ul:text-white/70 prose-ol:text-white/70
                                    prose-li:font-light prose-li:marker:text-white/40"
                                dangerouslySetInnerHTML={{ __html: career.requirements }}
                            />
                        </div>
                    )}

                    {/* Benefits */}
                    {career.benefits && (
                        <div className="mb-12">
                            <h2 className="text-2xl font-light text-white mb-6">Benefit</h2>
                            <div
                                className="prose prose-invert max-w-none
                                    prose-headings:font-light prose-headings:text-white prose-headings:tracking-tight
                                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                                    prose-p:text-white/70 prose-p:font-light prose-p:leading-relaxed
                                    prose-strong:text-white prose-strong:font-medium
                                    prose-ul:text-white/70 prose-ol:text-white/70
                                    prose-li:font-light prose-li:marker:text-white/40"
                                dangerouslySetInnerHTML={{ __html: career.benefits }}
                            />
                        </div>
                    )}

                    {/* Back Link */}
                    <div className="mt-16 pt-8 border-t border-white/10">
                        <Link
                            href="/career"
                            className="inline-flex items-center gap-2 text-white/60 font-light hover:text-white transition-colors"
                        >
                            <ArrowLeft size={18} />
                            Kembali ke semua posisi
                        </Link>
                    </div>
                </div>
            </article>

            {/* CTA Section */}
            <section className="bg-sk-sea-shade py-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight">
                        Siap Bergabung dengan Tim Kami?
                    </h2>
                    <p className="text-white/60 font-light text-lg mb-8 max-w-xl mx-auto">
                        Kirimkan lamaran Anda dan jadilah bagian dari tim kami yang terus berkembang.
                    </p>
                    <a
                        href="mailto:career@gatrahs.com"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-light hover:bg-white/90 transition-colors"
                    >
                        <Mail size={18} />
                        Lamar Posisi Ini
                    </a>
                </div>
            </section>
        </div>
    )
}
