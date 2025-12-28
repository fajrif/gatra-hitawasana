import { LogoCloud } from "@/components/ui/logo-cloud"

interface ClientsCloudProps {
  title?: boolean
}

export function ClientsCloud({ title = true }: ClientsCloudProps) {
    const clientLogos = [
        { src: "/images/clients/icon-green-logo-white.png", alt: "Our Clients", hoverSrc: "/images/clients/icon-green-logo.png" },
        { src: "/images/clients/icon-plus-logo-white.png", alt: "Our Clients", hoverSrc: "/images/clients/icon-plus-logo.png" },
        { src: "/images/clients/kai-logo-white.png", alt: "Our Clients", hoverSrc: "/images/clients/kai-logo.png" },
        { src: "/images/clients/kemensos-logo-white.png", alt: "Our Clients", hoverSrc: "/images/clients/kemensos-logo.png" },
        { src: "/images/clients/kominfo-logo-white.png", alt: "Our Clients", hoverSrc: "/images/clients/kominfo-logo.png" },
        { src: "/images/clients/pertamina-logo-white.png", alt: "Our Clients", hoverSrc: "/images/clients/pertamina-logo.png" },
        { src: "/images/clients/poltekkes-logo-white.png", alt: "Our Clients", hoverSrc: "/images/clients/poltekkes-logo.png" },
    ]

    return (
        <>
          {title && 
            <h2 className="mb-5 text-center font-medium text-lg tracking-tight md:text-2xl">
                <span className="text-muted-foreground">Kami Bermitra Dengan Beragam Industri.</span>
                <br />
                <span className="font-semibold">Dipercaya Oleh Berbagai Institusi di Tanah Air.</span>
            </h2>
          }
          <LogoCloud logos={clientLogos} />
        </>
    )
}
