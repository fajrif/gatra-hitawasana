import { PageBanner } from "@/components/page-banner"
import { AnimatedDiv } from "@/components/animated-div"
import { Server, Code, Users, Settings, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Server,
    title: "Telekomunikasi & IT Infrastruktur",
    description:
      "Solusi perangkat keras komprehensif dari vendor terkemuka, termasuk server, peralatan jaringan, sistem penyimpanan, dan infrastruktur telekomunikasi.",
    href: "/business/telco-infa",
    features: ["Server Enterprise", "Peralatan Jaringan", "Sistem Penyimpanan", "Infrastruktur Telko"]
  },
  {
    icon: Code,
    title: "Solusi Digital",
    description:
      "Pengembangan perangkat lunak kustom termasuk aplikasi web, aplikasi mobile, dan sistem enterprise yang dibangun dengan framework modern seperti Next.js, React, dan React Native.",
    href: "/business/digital-solutions",
    features: ["Aplikasi Web", "Aplikasi Mobile", "Sistem Enterprise", "Solusi Cloud"]
  },
  {
    icon: Users,
    title: "Manajemen Sumber Daya Manusia",
    description:
      "Akses ke tenaga profesional teknis terampil termasuk developer, system administrator, network engineer, dan IT consultant untuk proyek Anda.",
    href: "/business/hr-management",
    features: ["Software Developer", "System Administrator", "Network Engineer", "IT Consultant"]
  },
  {
    icon: Settings,
    title: "Managed Service",
    description:
      "Monitoring 24/7, pemeliharaan, dan dukungan untuk infrastruktur IT Anda, memastikan performa optimal dan downtime minimal.",
    href: "/business/managed-service",
    features: ["Monitoring 24/7", "Keamanan IT", "Optimisasi Performa", "Dukungan Teknis"]
  },
]

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Banner Section */}
      <PageBanner
        title="Layanan Bisnis Kami"
        description="Solusi IT komprehensif yang dirancang untuk memenuhi kebutuhan perusahaan modern. Dari infrastruktur hingga aplikasi, kami siap membantu."
        breadcrumbs={[{ label: "Layanan" }]}
        badge={{ label: "Enterprise", text: "Solutions" }}
      />

      {/* Services Grid */}
      <section className="bg-black py-20 px-4">
        <AnimatedDiv id="services-grid" className="container mx-auto max-w-6xl">
          <div className="grid gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link key={index} href={service.href}>
                  <div className="group rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-8 backdrop-blur hover:bg-[rgba(231,236,235,0.12)] transition-all duration-300">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/15 transition-colors">
                        <Icon className="text-white/80" size={32} />
                      </div>
                      <div className="flex-1 space-y-4">
                        <h2 className="text-2xl font-light text-white group-hover:text-white/90 transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-white/60 font-light leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {service.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white/60"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-white/80 group-hover:text-white group-hover:gap-3 transition-all pt-2">
                          <span className="text-sm font-light">Pelajari Selengkapnya</span>
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </AnimatedDiv>
      </section>

      {/* CTA Section */}
      <section className="bg-sk-gold py-20 px-4">
        <AnimatedDiv id="cta-section" className="container mx-auto max-w-4xl text-center" delay={0.2}>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Butuh Solusi Khusus?
          </h2>
          <p className="text-gray-600 font-light text-lg mb-8 max-w-xl mx-auto">
            Hubungi tim kami untuk mendiskusikan kebutuhan bisnis Anda dan dapatkan solusi yang tepat
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
