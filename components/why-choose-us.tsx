export function WhyChooseUs() {
    return (
        <section className="bg-sk-gold py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* Tagline */}
                <div className="text-center mb-12">
                    <p className="text-lg md:text-xl text-muted font-medium uppercase">
                        Mengapa Perusahaan Enterprise Memilih Kami
                    </p>
                </div>

                {/* 3-column grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center">
                    {/* Column 1: First stat */}
                    <div className="text-center md:text-right">
                        <h3 className="text-2xl md:text-3xl lg:text-3xl font-medium text-gray-900 leading-tight mb-2">
                            Kemitraan Resmi & Garansi Terjamin
                        </h3>
                        <p className="text-muted">Kami bekerja sama langsung dengan vendor teknologi resmi dan tersertifikasi, memastikan setiap solusi yang kami implementasikan dilengkapi dengan garansi resmi, dukungan teknis berkelanjutan, serta standar kualitas enterprise.</p>
                    </div>

                    {/* Column 2: Vertical divider (hidden on mobile) */}
                    <div className="hidden md:block w-px h-24 bg-gray-300" />

                    {/* Column 3: Second stat */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl lg:text-3xl font-medium text-gray-900 leading-tight mb-2">
                            Pengiriman & Instalasi Cepat
                        </h3>
                        <p className="text-muted">Didukung oleh tim profesional dan proses kerja yang matang, kami memastikan pengiriman perangkat dan instalasi dilakukan secara cepat, tepat waktu, dan minim gangguan operasional. Setiap implementasi dirancang agar selaras dengan kebutuhan dan skala bisnis enterprise.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
