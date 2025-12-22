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
                        className="pointer-events-auto h-8 select-none md:h-12 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
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
