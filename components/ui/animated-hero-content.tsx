'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ShinyButton } from './shiny-button'

gsap.registerPlugin(useGSAP)

interface HeroImage {
    src: string
    alt: string
    grayscale?: boolean
}

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
    images?: [HeroImage, HeroImage, HeroImage] | HeroImage[]
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
    images = [],
}: AnimatedHeroContentProps) {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const paraRef = useRef<HTMLParagraphElement | null>(null)
    const ctaRef = useRef<HTMLDivElement | null>(null)
    const badgeRef = useRef<HTMLDivElement | null>(null)
    const microRef = useRef<HTMLUListElement | null>(null)
    const imagesRef = useRef<HTMLDivElement | null>(null)

    useGSAP(
        () => {
            if (!animate) return

            // The title (h1) is intentionally NOT animated. It's the LCP element on
            // mobile, and animating it in from opacity:0 pins LCP to the animation's
            // end (~7s under throttled mobile). Leaving it in its final painted state
            // keeps LCP at first paint. The surrounding elements still animate in.

            // Set initial states
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
            if (imagesRef.current) {
                const imageItems = imagesRef.current.querySelectorAll('.hero-image')
                gsap.set(imageItems, { autoAlpha: 0, y: 20, scale: 0.95 })
            }

            // Animation timeline
            const tl = gsap.timeline({
                defaults: { ease: 'power3.out' },
            })

            // Badge
            if (badgeRef.current) {
                tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.0)
            }

            // Description
            if (paraRef.current) {
                tl.to(paraRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.15)
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

            // Hero Images
            if (imagesRef.current) {
                const imageItems = imagesRef.current.querySelectorAll('.hero-image')
                tl.to(imageItems, { autoAlpha: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15 }, '-=0.4')
            }
        },
        { scope: sectionRef, dependencies: [animate] }
    )

    return (
        <div
            ref={sectionRef}
            className={`relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-24 pt-36 sm:pt-44 md:px-10 lg:grid-cols-2 lg:gap-12 lg:px-16 ${className}`}
        >
            {/* Left Column - Content */}
            <div className="flex flex-col items-start gap-6 sm:gap-8">
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

                {/* Title — intentionally not animated; it's the mobile LCP element. */}
                <h1
                    className="max-w-2xl text-left text-3xl font-extralight uppercase leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl"
                >
                    {title}
                </h1>

                {/* Description */}
                <p
                    ref={paraRef}
                    className="max-w-xl text-left text-base font-light leading-relaxed tracking-tight text-white sm:text-lg"
                >
                    {description}
                </p>

                {/* CTA Buttons */}
                {ctaButtons.length > 0 && (
                    <div ref={ctaRef} className="flex flex-wrap items-center gap-3 pt-2">
                        {ctaButtons.map((button, index) => (
                            button.primary ? (
                                <ShinyButton
                                    key={index}
                                    href={button.href}
                                    className="text-white rounded-2xl text-sm py-3"
                                >
                                    {button.text}
                                </ShinyButton>
                            ) : (
                                <a
                                    key={index}
                                    href={button.href}
                                    className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-light tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 duration-300 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                                >
                                    {button.text}
                                </a>
                            )
                        ))}
                    </div>
                )}

                {/* Micro Details */}
                {microDetails.length > 0 && (
                    <ul
                        ref={microRef}
                        className="mt-8 flex flex-wrap gap-6 text-xs font-extralight tracking-tight text-white"
                    >
                        {microDetails.map((detail, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <span className="h-1 w-1 rounded-full bg-white/40" /> {detail}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Right Column - Images Grid */}
            {images.length >= 3 && (
                <div
                    ref={imagesRef}
                    className="hidden md:grid grid-cols-2 gap-4 lg:gap-5"
                    style={{ gridTemplateRows: 'repeat(2, 1fr)' }}
                >
                    {/* Top left image */}
                    <div className="hero-image relative overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <Image
                            src={images[1].src}
                            alt={images[1].alt}
                            fill
                            sizes="(min-width: 768px) 25vw, 0px"
                            className={`object-cover transition-all duration-500 hover:scale-105 ${images[1].grayscale ? 'grayscale' : ''}`}
                        />
                    </div>

                    {/* Large portrait image - spans 2 rows, placed in second column */}
                    <div className="hero-image row-span-2 relative overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <Image
                            src={images[0].src}
                            alt={images[0].alt}
                            fill
                            sizes="(min-width: 768px) 25vw, 0px"
                            priority
                            className={`object-cover transition-all duration-500 hover:scale-105 ${images[0].grayscale ? 'grayscale' : ''}`}
                        />
                    </div>

                    {/* Bottom left image */}
                    <div className="hero-image relative overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <Image
                            src={images[2].src}
                            alt={images[2].alt}
                            fill
                            sizes="(min-width: 768px) 25vw, 0px"
                            className={`object-cover transition-all duration-500 hover:scale-105 ${images[2].grayscale ? 'grayscale' : ''}`}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
