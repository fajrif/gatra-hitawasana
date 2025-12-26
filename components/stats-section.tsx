export function StatsSection() {
    return (
        <section className="bg-sk-gold py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Tagline */}
                <div className="text-center mb-12">
                    <p className="text-sm md:text-base text-muted font-medium uppercase">
                        Wujudkan Solusi IT yang Andal dan Efisien
                    </p>
                </div>

                {/* 3-column grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center">
                    {/* Column 1: First stat */}
                    <div className="text-center md:text-right">
                        <h3 className="text-2xl md:text-3xl lg:text-3xl font-medium text-gray-900 leading-tight">
                            92% Klien kami menyatakan puas dengan layanan kami
                        </h3>
                    </div>

                    {/* Column 2: Vertical divider (hidden on mobile) */}
                    <div className="hidden md:block w-px h-24 bg-gray-300" />

                    {/* Column 3: Second stat */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl lg:text-3xl font-medium text-gray-900 leading-tight">
                            100+ Proyek berhasil dikembangkan dan terimplementasi dengan baik
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
