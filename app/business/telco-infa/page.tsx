import { PageBanner } from "@/components/page-banner"
import { AnimatedDiv } from "@/components/animated-div"
import { Server, Network, HardDrive, Cpu, Radio, Wifi, Shield, Zap } from "lucide-react"
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
    icon: Cpu,
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
        description="Solusi perangkat keras enterprise-grade dari produsen terkemuka. Kami menangani pengadaan, deployment, dan integrasi infrastruktur telekomunikasi dan IT."
        breadcrumbs={[
          { label: "Layanan", href: "/business" },
          { label: "Telco & IT Infra" }
        ]}
        badge={{ label: "Enterprise", text: "Hardware" }}
      />

      {/* Infrastructure Grid */}
      <section className="bg-black py-20 px-4">
        <AnimatedDiv id="infra-grid" className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
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
                  <p className="text-white/60 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-white/50">
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
      <section className="bg-sk-sea-shade py-20 px-4">
        <AnimatedDiv id="why-section" className="container mx-auto max-w-6xl" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight">
              Mengapa Memilih Kami
            </h2>
            <p className="text-white/60 font-light text-lg max-w-2xl mx-auto">
              Keunggulan layanan pengadaan infrastruktur kami
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Vendor Resmi", desc: "Partner resmi vendor teknologi terkemuka" },
              { icon: Zap, title: "Delivery Cepat", desc: "Pengiriman dan instalasi tepat waktu" },
              { icon: Wifi, title: "Integrasi Lengkap", desc: "Setup dan integrasi dengan sistem existing" },
              { icon: Radio, title: "Dukungan Purna Jual", desc: "Warranty dan maintenance support" },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-6 backdrop-blur text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="text-white/70" size={24} />
                  </div>
                  <h3 className="text-lg font-light text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 font-light text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </AnimatedDiv>
      </section>

      {/* Vendor Partners */}
      <section className="bg-black py-20 px-4">
        <AnimatedDiv id="vendors-section" className="container mx-auto max-w-6xl" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight">
              Vendor Partner
            </h2>
            <p className="text-white/60 font-light text-lg max-w-2xl mx-auto">
              Kerjasama dengan vendor teknologi terkemuka dunia
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {vendors.map((vendor, index) => (
              <div
                key={index}
                className="px-8 py-4 rounded-full border border-white/20 bg-[rgba(231,236,235,0.05)]"
              >
                <span className="text-white/70 font-light">{vendor}</span>
              </div>
            ))}
          </div>
        </AnimatedDiv>
      </section>

      {/* CTA */}
      <section className="bg-sk-gold py-20 px-4">
        <AnimatedDiv id="cta-section" className="container mx-auto max-w-4xl text-center" delay={0.3}>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Butuh Solusi Infrastruktur?
          </h2>
          <p className="text-gray-600 font-light text-lg mb-8 max-w-xl mx-auto">
            Hubungi kami untuk mendiskusikan kebutuhan infrastruktur Anda
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-gray-900 px-8 py-4 text-white font-light hover:bg-gray-800 transition-colors"
          >
            Hubungi Kami
          </Link>
        </AnimatedDiv>
      </section>
    </div>
  )
}
