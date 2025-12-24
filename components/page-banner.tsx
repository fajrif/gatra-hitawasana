'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitType from 'split-type'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

gsap.registerPlugin(useGSAP)

interface BreadcrumbItem {
    label: string
    href?: string
}

interface PageBannerProps {
    title: string
    description?: string
    breadcrumbs?: BreadcrumbItem[]
    badge?: {
        label: string
        text: string
    }
    className?: string
    animate?: boolean
}

export function PageBanner({
    title,
    description,
    breadcrumbs = [],
    badge,
    className = '',
    animate = true,
}: PageBannerProps) {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const headerRef = useRef<HTMLHeadingElement | null>(null)
    const descRef = useRef<HTMLParagraphElement | null>(null)
    const badgeRef = useRef<HTMLDivElement | null>(null)
    const breadcrumbRef = useRef<HTMLDivElement | null>(null)

    useGSAP(
        () => {
            if (!animate || !headerRef.current) return

            document.fonts.ready.then(() => {
                const split = new SplitType(headerRef.current!, {
                    types: 'words',
                    wordClass: 'word',
                })

                gsap.set(split.words, {
                    filter: 'blur(12px)',
                    yPercent: 20,
                    autoAlpha: 0,
                    scale: 1.04,
                    transformOrigin: '50% 100%',
                })

                if (badgeRef.current) {
                    gsap.set(badgeRef.current, { autoAlpha: 0, y: -6 })
                }
                if (descRef.current) {
                    gsap.set(descRef.current, { autoAlpha: 0, y: 8 })
                }
                if (breadcrumbRef.current) {
                    gsap.set(breadcrumbRef.current, { autoAlpha: 0, y: -4 })
                }

                const tl = gsap.timeline({
                    defaults: { ease: 'power3.out' },
                })

                // Breadcrumb
                if (breadcrumbRef.current) {
                    tl.to(breadcrumbRef.current, { autoAlpha: 1, y: 0, duration: 0.4 }, 0.0)
                }

                // Badge
                if (badgeRef.current) {
                    tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.4 }, 0.1)
                }

                // Title words
                tl.to(
                    split.words,
                    {
                        filter: 'blur(0px)',
                        yPercent: 0,
                        autoAlpha: 1,
                        scale: 1,
                        duration: 0.7,
                        stagger: 0.12,
                    },
                    0.15
                )

                // Description
                if (descRef.current) {
                    tl.to(descRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.4')
                }
            })
        },
        { scope: sectionRef, dependencies: [animate] }
    )

    return (
        <div
            ref={sectionRef}
            className={`relative overflow-hidden ${className}`}
        >
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
            <div className="relative mx-auto max-w-6xl px-4 pt-32 pb-16 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                {breadcrumbs.length > 0 && (
                    <div
                        ref={breadcrumbRef}
                        className="flex items-center gap-1 text-sm font-light text-white/60 mb-6"
                    >
                        <Link href="/" className="hover:text-white/80 transition-colors">
                            Home
                        </Link>
                        {breadcrumbs.map((crumb, index) => (
                            <span key={index} className="flex items-center gap-1">
                                <ChevronRight className="w-3 h-3" />
                                {crumb.href ? (
                                    <Link href={crumb.href} className="hover:text-white/80 transition-colors">
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className="text-white/80">{crumb.label}</span>
                                )}
                            </span>
                        ))}
                    </div>
                )}

                {/* Badge */}
                {badge && (
                    <div
                        ref={badgeRef}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm mb-6"
                    >
                        <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">
                            {badge.label}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-white/40" />
                        <span className="text-xs font-light tracking-tight text-white/80">
                            {badge.text}
                        </span>
                    </div>
                )}

                {/* Title */}
                <h1
                    ref={headerRef}
                    className="max-w-3xl text-4xl font-extralight leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
                >
                    {title}
                </h1>

                {/* Description */}
                {description && (
                    <p
                        ref={descRef}
                        className="mt-6 max-w-2xl text-base font-light leading-relaxed text-white/70 sm:text-lg"
                    >
                        {description}
                    </p>
                )}
            </div>
        </div>
    )
}
