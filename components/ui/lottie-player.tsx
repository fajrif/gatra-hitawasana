'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { cn } from '@/lib/utils'

// lottie-react pulls in a sizeable animation runtime; loading it via next/dynamic
// keeps it out of the calling route's shared JS bundle so pages that merely
// prefetch a route using LottiePlayer don't also fetch this dependency.
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

interface LottiePlayerProps {
    animationPath?: string
    animationData?: object
    loop?: boolean
    autoplay?: boolean
    className?: string
    width?: number | string
    height?: number | string
}

export function LottiePlayer({
    animationPath,
    animationData,
    loop = true,
    autoplay = true,
    className,
    width = '100%',
    height = 'auto'
}: LottiePlayerProps) {
    const [animation, setAnimation] = React.useState<object | null>(animationData || null)
    const [loading, setLoading] = React.useState(!!animationPath)
    const [error, setError] = React.useState<string | null>(null)

    React.useEffect(() => {
        if (animationPath && !animationData) {
            setLoading(true)
            fetch(animationPath)
                .then(res => {
                    if (!res.ok) throw new Error('Failed to load animation')
                    return res.json()
                })
                .then(data => {
                    setAnimation(data)
                    setLoading(false)
                })
                .catch(err => {
                    setError(err.message)
                    setLoading(false)
                })
        }
    }, [animationPath, animationData])

    if (loading) {
        return (
            <div className={cn("flex items-center justify-center", className)} style={{ width, height }}>
                <div className="text-muted-foreground">Loading animation...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className={cn("flex items-center justify-center", className)} style={{ width, height }}>
                <div className="text-red-500">Error loading animation: {error}</div>
            </div>
        )
    }

    if (!animation) {
        return null
    }

    return (
        <div className={cn(className)} style={{ width, height }}>
            <Lottie
                animationData={animation}
                loop={loop}
                autoplay={autoplay}
            />
        </div>
    )
}
