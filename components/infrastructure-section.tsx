import { CircleDot } from "lucide-react"
import { LottiePlayer } from '@/components/ui/lottie-player'

export function InfrastructureSection() {

    const infraScope = [
        {
            title: "Infrastruktur Server",
            description: "Server performa tinggi untuk data center, infrastruktur cloud, dan kebutuhan komputasi enterprise.",
            features: ["Server Rack & Blade", "High-Performance Computing", "Virtualization Platform", "Server Colocation"]
        },
        {
            title: "Peralatan Jaringan",
            description: "Router, switch, firewall, dan solusi wireless dari vendor jaringan terkemuka.",
            features: ["Enterprise Router", "Managed Switch", "Next-Gen Firewall", "Wireless Access Point"]
        },
        {
            title: "Sistem Penyimpanan",
            description: "Solusi SAN, NAS, dan cloud storage untuk backup data, pengarsipan, dan disaster recovery.",
            features: ["SAN/NAS Storage", "Backup Solution", "Disaster Recovery", "Cloud Storage Gateway"]
        },
        {
            title: "Infrastruktur Telekomunikasi",
            description: "Peralatan telekomunikasi termasuk sistem PBX, VoIP, dan unified communications.",
            features: ["IP PBX System", "VoIP Solution", "Video Conferencing", "Unified Communications"]
        },
    ]

    return (
        <>
            <div className="grid lg:grid-cols-2 gap-12 items-start py-4 md:py-12">
                {/* Lottie Animation */}
                <div className="md:sticky md:top-24 space-y-4 text-white">
                    <div className="flex items-center justify-center">
                        <LottiePlayer
                            animationPath="/lottie/networking.json"
                            loop={true}
                            autoplay={true}
                            className="w-full max-w-md"
                        />
                    </div>
                </div>

                {/* Scope List */}
                <div className="space-y-6 pl-0 md:pl-10">
                    <h2 className="text-xl md:text-2xl tracking-tighter lg:max-w-xl font-medium uppercase text-left mb-3">Scope</h2>
                    <div className="space-y-6">
                        {infraScope.map((item, idx) => (
                            <div key={idx} className="mb-8">
                                <h3 className="text-lg font-regular text-white uppercase mb-2">{item.title}:</h3>
                                <p className="text-white/80 font-light w-80 md:w-90 mb-4">{item.description}</p>
                                <ul className="space-y-3">
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CircleDot className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground font-light">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}
