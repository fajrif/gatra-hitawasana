export function StatsSection({ darkMode = false }: { darkMode?: boolean }) {
    return (
        <section className={`${darkMode ? 'bg-black' : 'bg-sk-gold'} py-10 md:py-16 px-4`}>
            <div className="container mx-auto max-w-6xl">
                {/* Tagline */}
                <div className="text-center mb-8 md:mb-12">
                    <p className={`text-sm md:text-base ${darkMode ? 'text-white/80' : 'text-muted'} font-medium uppercase`}>
                        Wujudkan Solusi IT yang Andal dan Efisien
                    </p>
                </div>

                {/* 3-column grid layout */}
                <div className={`grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {/* Column 1: First stat */}
                    <div className="text-center md:text-right">
                        <h3 className="text-2xl md:text-3xl lg:text-3xl font-medium leading-tight">
                            92% Klien kami menyatakan puas dengan layanan kami
                        </h3>
                    </div>

                    {/* Divider: horizontal on mobile, vertical on desktop */}
                    <div className="w-24 h-px md:w-px md:h-24 bg-gray-300 mx-auto" />

                    {/* Column 3: Second stat */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl lg:text-3xl font-medium leading-tight">
                            100+ Proyek berhasil dikembangkan dan terimplementasi dengan baik
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
