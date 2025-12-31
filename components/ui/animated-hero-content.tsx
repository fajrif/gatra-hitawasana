'use client'

import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitType from 'split-type'

gsap.registerPlugin(useGSAP)

interface AnimatedHeroContentProps {
    title: string
    description: string
    badgeText?: string
    badgeLabel?: string
    ctaButtons?: Array<{
        text: string
        href: string
        primary?: boolean
    }>
    microDetails?: Array<string>
    className?: string
    animate?: boolean
}

export function AnimatedHeroContent({
    title,
    description,
    badgeText,
    badgeLabel,
    ctaButtons = [],
    microDetails = [],
    className = '',
    animate = true,
}: AnimatedHeroContentProps) {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const headerRef = useRef<HTMLHeadingElement | null>(null)
    const paraRef = useRef<HTMLParagraphElement | null>(null)
    const ctaRef = useRef<HTMLDivElement | null>(null)
    const badgeRef = useRef<HTMLDivElement | null>(null)
    const microRef = useRef<HTMLUListElement | null>(null)

    useGSAP(
        () => {
            if (!animate || !headerRef.current) return

            // Wait for fonts to load
            document.fonts.ready.then(() => {
                // Split text into words using SplitType
                const split = new SplitType(headerRef.current!, {
                    types: 'words',
                    wordClass: 'word',
                })

                // Set initial states
                gsap.set(split.words, {
                    filter: 'blur(16px)',
                    yPercent: 30,
                    autoAlpha: 0,
                    scale: 1.06,
                    transformOrigin: '50% 100%',
                })

                if (badgeRef.current) {
                    gsap.set(badgeRef.current, { autoAlpha: 0, y: -8 })
                }
                if (paraRef.current) {
                    gsap.set(paraRef.current, { autoAlpha: 0, y: 8 })
                }
                if (ctaRef.current) {
                    gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 })
                }
                if (microRef.current) {
                    const microItems = microRef.current.querySelectorAll('li')
                    gsap.set(microItems, { autoAlpha: 0, y: 6 })
                }

                // Animation timeline
                const tl = gsap.timeline({
                    defaults: { ease: 'power3.out' },
                })

                // Badge
                if (badgeRef.current) {
                    tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.0)
                }

                // Title words
                tl.to(
                    split.words,
                    {
                        filter: 'blur(0px)',
                        yPercent: 0,
                        autoAlpha: 1,
                        scale: 1,
                        duration: 0.9,
                        stagger: 0.15,
                    },
                    0.1
                )

                // Description
                if (paraRef.current) {
                    tl.to(paraRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.55')
                }

                // CTA buttons
                if (ctaRef.current) {
                    tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, '-=0.35')
                }

                // Micro details
                if (microRef.current) {
                    const microItems = microRef.current.querySelectorAll('li')
                    tl.to(microItems, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, '-=0.25')
                }
            })
        },
        { scope: sectionRef, dependencies: [animate] }
    )

    return (
        <div
            ref={sectionRef}
            className={`relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-36 sm:gap-8 sm:pt-44 md:px-10 lg:px-16 ${className}`}
        >
            {/* Badge */}
            {(badgeText || badgeLabel) && (
                <div
                    ref={badgeRef}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm"
                >
                    {badgeLabel && (
                        <>
                            <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">
                                {badgeLabel}
                            </span>
                            <span className="h-1 w-1 rounded-full bg-white/40" />
                        </>
                    )}
                    <span className="text-xs font-light tracking-tight text-white/80">{badgeText}</span>
                </div>
            )}

            {/* Title */}
            <h1
                ref={headerRef}
                className="max-w-2xl text-left text-3xl font-extralight uppercase leading-[1.05] tracking-tight text-white sm:text-6xl md:text-6xl"
            >
                {title}
            </h1>

            {/* Description */}
            <p
                ref={paraRef}
                className="max-w-xl text-left text-base font-light leading-relaxed tracking-tight text-white/75 sm:text-lg"
            >
                {description}
            </p>

            {/* CTA Buttons */}
            {ctaButtons.length > 0 && (
                <div ref={ctaRef} className="flex flex-wrap items-center gap-3 pt-2">
                    {ctaButtons.map((button, index) => (
                        <a
                            key={index}
                            href={button.href}
                            className={`rounded-2xl border border-white/10 px-5 py-3 text-sm font-light tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 duration-300 ${button.primary
                                ? 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
                                : 'text-white/80 hover:bg-white/5'
                                }`}
                        >
                            {button.text}
                        </a>
                    ))}
                </div>
            )}

            {/* Micro Details */}
            {microDetails.length > 0 && (
                <ul
                    ref={microRef}
                    className="mt-8 flex flex-wrap gap-6 text-xs font-extralight tracking-tight text-white/60"
                >
                    {microDetails.map((detail, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-white/40" /> {detail}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
