'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// Three.js/@react-three are ~230KB and only needed for this decorative canvas.
// Loading them via next/dynamic keeps them out of this route's shared JS bundle,
// so other pages that prefetch this route (e.g. the logo link in Navigation)
// don't also fetch Three.js.
const NeuralNetworkCanvas = dynamic(() => import('./neural-network-canvas'), {
    ssr: false,
})

interface NeuralNetworkBackgroundProps {
    children?: React.ReactNode
    colorScheme?: {
        primary?: string
        secondary?: string
        accent?: string
    }
    intensity?: number
    blur?: number
    className?: string
}

export function NeuralNetworkBackground({
    children,
    colorScheme,
    intensity = 0.5,
    blur = 20,
    className = '',
}: NeuralNetworkBackgroundProps) {
    const canvasRef = useRef<HTMLDivElement | null>(null)

    useGSAP(
        () => {
            if (!canvasRef.current) return

            gsap.set(canvasRef.current, {
                filter: `blur(${blur}px)`,
                scale: 1.1,
                autoAlpha: 0.7,
            })

            gsap.to(canvasRef.current, {
                filter: 'blur(0px)',
                scale: 1,
                autoAlpha: 1,
                duration: 1.5,
                ease: 'power3.out',
                delay: 0.3,
            })
        },
        { scope: canvasRef }
    )

    return (
        <div className={`relative ${className}`}>
            {/* Shader Background */}
            <div
                ref={canvasRef}
                className="bg-sk-sea-shade absolute inset-0 -z-10 w-full h-full"
                aria-hidden="true"
            >
                <NeuralNetworkCanvas colorScheme={colorScheme} intensity={intensity} />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
            </div>

            {/* Content */}
            {children}
        </div>
    )
}
