import { BackedByICONPlus } from '@/components/ui/backed-by-icon-plus'
import { ShinyButton } from '@/components/ui/shiny-button'

export function ClientPrimary() {
    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
                <div className="bg-muted rounded-md w-full h-full flex-1">
                    <img
                        src="/images/pln-icon-plus-building.png"
                        alt="PLN Icon Plus Head Office"
                        className="w-full h-full grayscale hover:grayscale-50 transition-all duration-300 cursor-pointer object-cover rounded-md"
                    />
                </div>
                <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
                    <div className="flex gap-2 flex-col">
                        <BackedByICONPlus />
                        <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-extralight uppercase text-left mb-3">
                            Mitra Utama Kami
                        </h2>
                        <p className="text-muted-foreground leading-relaxed tracking-tight text-left mb-2">
                            Sejak mulai berdiri 2003 sebagai badan hukum. PT. Gatra Hita Wasana telah bermitra dan melakukan kerjasama dengan banyak mitra baik perusahaan swasta dan perusahaan dalam negeri salah satu nya adalah PT. Indonesia Comnets Plus sebagai salah satu perusahaan pengembang teknologi informasi terkemuka di Indonesia.
                        </p>
                        <p className="text-muted-foreground leading-relaxed tracking-tight text-left mb-4">
                            PLN Icon Plus merupakan Entitas Anak PT PLN (Persero) yang berfokus di bidang industri jaringan telekomunikasi serta penyedia Solusi Teknologi Informasi. Selama lebih dari dua dekade telah mengembangkan dan melayani berbagai macam kebutuhan serta pelayanan untuk induk perusahaan ( PT. PLN Persero ) ataupun untuk berbagai macam perusahaan lainnya.
                        </p>
                        <div>
                            <ShinyButton
                                href="/about"
                                className="text-muted-foreground hover:text-white rounded-2xl text-sm py-3"
                                style={{
                                    '--shiny-cta-bg-subtle': 'rgba(255,245,72,0.24)',
                                    '--shiny-cta-highlight': '#fff548',
                                    '--shiny-cta-highlight-subtle': '#ffed4e'
                                } as React.CSSProperties}
                            >
                                Tentang Kami
                            </ShinyButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
