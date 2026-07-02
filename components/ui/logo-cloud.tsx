'use client'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { cn } from '@/lib/utils'

type Logo = {
    src: string
    alt: string
    width?: number
    height?: number
}

type LogoCloudProps = React.ComponentProps<'div'> & {
    logos: Logo[]
}

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
    return (
        <div
            {...props}
            className={cn(
                'overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black,transparent)]',
                className
            )}
        >
            <InfiniteSlider gap={42} reverse duration={80} durationOnHover={25}>
                {logos.map((logo, index) => (
                    <img
                        alt={logo.alt}
                        // Idle: rendered white via brightness(0) invert(1). Hover: invert-0 cancels
                        // that, revealing the logo's true brand colors from the same file — avoids
                        // shipping a second "-white" PNG per client just for the idle state.
                        className="pointer-events-auto h-8 select-none md:h-12 opacity-60 brightness-0 invert hover:opacity-100 hover:invert-0 hover:brightness-125 hover:drop-shadow-[0_0_20px_rgba(255,255,255,1)] hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-300 cursor-pointer"
                        height={logo.height || 'auto'}
                        key={`logo-${index}`}
                        loading="lazy"
                        src={logo.src}
                        width={logo.width || 'auto'}
                    />
                ))}
            </InfiniteSlider>
        </div>
    )
}
