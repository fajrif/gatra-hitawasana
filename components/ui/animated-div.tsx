"use client"

import { motion, type MotionProps } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedDivProps {
    children: ReactNode
    className?: string
    delay?: number
    id?: string
    /**
     * When false, the element starts fully opaque and only its transform
     * animates in. Use for above-the-fold sections that hold the LCP element —
     * fading from opacity:0 would pin LCP to the animation's end on mobile.
     */
    fadeIn?: boolean
}

export function AnimatedDiv({ children, className, delay = 0, id, fadeIn = true }: AnimatedDivProps) {
    return (
        <motion.div
            id={id}
            initial={{ opacity: fadeIn ? 0 : 1, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
