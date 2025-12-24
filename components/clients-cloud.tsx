import { LogoCloud } from "@/components/ui/logo-cloud"

export function ClientsCloud() {
    const clientLogos = [
        { src: "/images/clients/icon-green-logo.png", alt: "Our Clients" },
        { src: "/images/clients/icon-plus-logo.png", alt: "Our Clients" },
        { src: "/images/clients/kai-logo.png", alt: "Our Clients" },
        { src: "/images/clients/kemensos-logo.png", alt: "Our Clients" },
        { src: "/images/clients/kominfo-logo.png", alt: "Our Clients" },
        { src: "/images/clients/pertamina-logo.png", alt: "Our Clients" },
        { src: "/images/clients/poltekkes-logo.png", alt: "Our Clients" },
    ]

    return (
        <>
            <h2 className="mb-5 text-center font-medium text-xl tracking-tight md:text-2xl">
                <span className="text-muted-foreground">Kami Bermitra Dengan Beragam Industri.</span>
                <br />
                <span className="font-semibold">Dipercaya Oleh Berbagai Institusi di Tanah Air.</span>
            </h2>
            <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
            <LogoCloud logos={clientLogos} />
            <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
        </>
    )
}
