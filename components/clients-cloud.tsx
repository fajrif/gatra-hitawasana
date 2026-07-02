import { LogoCloud } from "@/components/ui/logo-cloud"

interface ClientsCloudProps {
  title?: boolean
}

export function ClientsCloud({ title = true }: ClientsCloudProps) {
    const clientLogos = [
        { src: "/images/clients/icon-green-logo.png", alt: "Our Clients", width: 360, height: 111 },
        { src: "/images/clients/icon-plus-logo.png", alt: "Our Clients", width: 203, height: 74 },
        { src: "/images/clients/kai-logo.png", alt: "Our Clients", width: 342, height: 144 },
        { src: "/images/clients/kemensos-logo.png", alt: "Our Clients", width: 368, height: 110 },
        { src: "/images/clients/kominfo-logo.png", alt: "Our Clients", width: 368, height: 125 },
        { src: "/images/clients/pertamina-logo.png", alt: "Our Clients", width: 372, height: 86 },
        { src: "/images/clients/poltekkes-logo.png", alt: "Our Clients", width: 369, height: 85 },
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
