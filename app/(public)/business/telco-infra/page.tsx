import { PageBanner } from "@/components/page-banner"
import { AnimatedDiv } from "@/components/animated-div"
import { Server, Network, HardDrive, Cpu, Radio, RadioTower, Wifi, Shield, ShieldCheck, Zap, PlugZap } from "lucide-react"
import VendorLogo from "@/components/vendor-logo"
import Link from "next/link"

const infrastructure = [
  {
    icon: Server,
    title: "Infrastruktur Server",
    description: "Server performa tinggi untuk data center, infrastruktur cloud, dan kebutuhan komputasi enterprise.",
    features: ["Server Rack & Blade", "High-Performance Computing", "Virtualization Platform", "Server Colocation"]
  },
  {
    icon: Network,
    title: "Peralatan Jaringan",
    description: "Router, switch, firewall, dan solusi wireless dari vendor jaringan terkemuka.",
    features: ["Enterprise Router", "Managed Switch", "Next-Gen Firewall", "Wireless Access Point"]
  },
  {
    icon: HardDrive,
    title: "Sistem Penyimpanan",
    description: "Solusi SAN, NAS, dan cloud storage untuk backup data, pengarsipan, dan disaster recovery.",
    features: ["SAN/NAS Storage", "Backup Solution", "Disaster Recovery", "Cloud Storage Gateway"]
  },
  {
    icon: RadioTower,
    title: "Infrastruktur Telekomunikasi",
    description: "Peralatan telekomunikasi termasuk sistem PBX, VoIP, dan unified communications.",
    features: ["IP PBX System", "VoIP Solution", "Video Conferencing", "Unified Communications"]
  },
]

const vendors = [
  "Cisco", "Dell", "HPE", "Huawei", "Fortinet", "Juniper", "NetApp", "VMware"
]

export default function TelcoInfraPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Banner Section */}
      <PageBanner
        title="Telekomunikasi & IT Infrastruktur"
        description="Solusi perangkat keras enterprise-grade dari produsen terkemuka. Kami menangani pengadaan perangkat, installasi, serta integrasi infrastruktur telekomunikasi dan Teknologi Informasi."
        breadcrumbs={[
          { label: "Layanan", href: "/business" },
          { label: "Telco & IT Infra" }
        ]}
        badge={{ label: "Enterprise", text: "Hardware" }}
      />

      <VendorLogo />

      {/* Infrastructure Grid */}
      <section className="bg-sk-sea-shade py-20 px-4">
        <AnimatedDiv id="infra-grid" className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            {infrastructure.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-8 backdrop-blur"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                    <Icon className="text-white/80" size={24} />
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-white/40" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </AnimatedDiv>
      </section>

      {/* Why Choose Us */}
      <section className="bg-sk-gold py-20 px-4">
        <AnimatedDiv id="why-section" className="container mx-auto max-w-6xl" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight mb-4 tracking-tight">
              Mengapa Memilih Kami
            </h2>
            <p className="text-muted font-light text-lg max-w-2xl mx-auto">
              Keunggulan layanan pengadaan infrastruktur kami
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Vendor Resmi", desc: "Partner resmi vendor teknologi terkemuka" },
              { icon: Shield, title: "Dukungan Purna Jual", desc: "Warranty dan maintenance support" },
              { icon: Zap, title: "Delivery Cepat", desc: "Pengiriman dan instalasi tepat waktu" },
              { icon: PlugZap, title: "Integrasi Lengkap", desc: "Setup dan integrasi dengan sistem existing" },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-black/20 bg-[rgba(0,0,0,0.08)] p-6 backdrop-blur text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="text-muted" size={24} />
                  </div>
                  <h3 className="text-lg font-light text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 font-light text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </AnimatedDiv>
      </section>

    </div>
  )
}
