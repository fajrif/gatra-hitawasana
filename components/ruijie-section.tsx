import { PartnerWithRuijie } from '@/components/ui/partner-with-ruijie'
import { ShinyButton } from '@/components/ui/shiny-button'
import { ImageSlider, SlideData } from '@/components/ui/image-slider'

const ruijieSlides: SlideData[] = [
    {
        image: '/images/ruijie-networks/ruijie-home-1.jpg',
        title: 'Sederhanakan Jaringan Anda Tingkatkan Kinerja Anda',
        description: 'Menyediakan konektivitas berkecepatan tinggi dan terukur untuk mendukung kebutuhan Anda yang terus berkembang.',
        textColor: 'white',
        titleSize: 'text-xl md:text-3xl'
    },
    {
        image: '/images/ruijie-networks/ruijie-home-2.jpg',
        title: 'Future-Proof Your Wi-Fi 7 Access Layer',
        description: 'Switch Multi-GE 2.5GE sempurna untuk kepadatan tinggi dan throughput tinggi, Penyebaran Wi-Fi 6E/7 dan seterusnya.',
        textColor: 'white',
        titleSize: 'text-xl md:text-3xl'
    },
    {
        image: '/images/ruijie-networks/ruijie-home-3.jpg',
        title: 'Cloud Data Center Solutions',
        description: 'Membantu pelanggan membangun pusat data cloud yang sangat cepat, cerdas, tanpa kehilangan data, ramah lingkungan, dan terbuka.',
        textColor: 'white',
        titleSize: 'text-xl md:text-3xl'
    }
]

export function RuijieSection() {
    return (
        <section id="ruijie-section">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
                <div className="bg-muted rounded-md w-full flex-1">
                    <ImageSlider slides={ruijieSlides} className="aspect-video" />
                </div>
                <div className="flex gap-4 pl-0 lg:pl-10 flex-col flex-1">
                    <div className="flex gap-2 flex-col">
                        <PartnerWithRuijie />
                        <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-extralight uppercase text-left mb-3">
                            Official Partner<br /> Ruijie Networks
                        </h2>
                        <p className="text-muted-foreground leading-relaxed tracking-tight text-left mb-2">
                            Kami telah menjalin kemitraan dengan Ruijie Networks — vendor global terdepan dalam solusi jaringan dan infrastruktur IT. Dengan dukungan teknologi andal dari Ruijie, kami mampu menyediakan solusi jaringan yang optimal, aman, dan mudah diintegrasikan untuk enterprise, data center, dan lingkungan infrastruktur modern.
                        </p>
                        <p className="text-muted-foreground leading-relaxed tracking-tight text-left mb-4">
                            Ruijie Networks (瑞捷网络) adalah perusahaan teknologi asal Tiongkok yang bergerak di bidang solusi jaringan dan infrastruktur IT kelas enterprise. Sejak didirikan pada tahun 2000, Ruijie telah berkembang menjadi salah satu vendor jaringan terkemuka di Asia dan global, dengan produk yang digunakan oleh organisasi besar, kampus universitas, instansi publik, dan perusahaan enterprise di berbagai industri.
                        </p>
                        <div>
                            <ShinyButton
                                href="https://www.ruijie.com/en-global/"
                                className="text-muted-foreground hover:text-white rounded-2xl text-sm py-3"
                                style={{
                                    '--shiny-cta-bg-subtle': 'rgba(255,255,255,0.34)',
                                    '--shiny-cta-highlight': '#E60039',
                                    '--shiny-cta-highlight-subtle': '#c40c3a'
                                } as React.CSSProperties}
                            >
                                Tentang Ruijie
                            </ShinyButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
