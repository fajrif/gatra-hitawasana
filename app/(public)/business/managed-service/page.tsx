import { PageBanner } from "@/components/ui/page-banner"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { Shield, Clock, TrendingUp, Headphones, Server, Eye } from "lucide-react"

const services = [
  {
    icon: Clock,
    title: "Monitoring 24/7",
    description: "Pemantauan infrastruktur sepanjang waktu untuk mendeteksi dan menyelesaikan masalah secara proaktif.",
    features: ["Pemantauan Performa Server", "Tracking Uptime Network", "Health Check Aplikasi", "Sistem Alert Otomatis"]
  },
  {
    icon: Shield,
    title: "Manajemen Keamanan",
    description: "Layanan keamanan komprehensif untuk melindungi infrastruktur dan data Anda.",
    features: ["Manajemen Firewall", "Patch Management", "Security Audit", "Threat Detection & Response"]
  },
  {
    icon: TrendingUp,
    title: "Optimisasi Performa",
    description: "Optimisasi berkelanjutan untuk memastikan sistem Anda memberikan performa terbaik.",
    features: ["Capacity Planning", "Performance Tuning", "Resource Optimization", "Scalability Planning"]
  },
  {
    icon: Headphones,
    title: "Dukungan Teknis",
    description: "Dukungan ahli kapanpun Anda butuhkan, dengan jaminan waktu respons.",
    features: ["Incident Response", "Problem Resolution", "Change Management", "Documentation & Reporting"]
  },
]

const slaMetrics = [
  { value: "99.9%", label: "Uptime Guarantee", icon: Server },
  { value: "<15min", label: "Response Time", icon: Clock },
  { value: "24/7", label: "Support Coverage", icon: Eye },
]

export default function ManagedServicePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Banner Section */}
      <PageBanner
        title="Managed Service"
        description="Layanan manajemen dan dukungan IT komprehensif untuk menjaga sistem Anda berjalan optimal. Fokus pada bisnis Anda, biarkan kami menangani teknologinya."
        breadcrumbs={[
          { label: "Layanan", href: "/business" },
          { label: "Managed Service" }
        ]}
        badge={{ label: "24/7", text: "Support" }}
      />

      {/* Services Grid */}
      <section className="bg-black py-20 px-4">
        <AnimatedDiv id="services-grid" className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-8 backdrop-blur"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                    <Icon className="text-white/80" size={24} />
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">{service.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full" />
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

      {/* SLA Section */}
      <section className="bg-sk-sea-shade py-20 px-4">
        <AnimatedDiv id="sla-section" className="container mx-auto max-w-6xl" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light uppercase text-white mb-4 tracking-tight">
              Service Level Agreement
            </h2>
            <p className="text-muted-foreground font-light text-lg max-w-2xl mx-auto">
              Komitmen kami untuk kualitas layanan terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {slaMetrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-8 backdrop-blur text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 mx-auto">
                    <Icon className="text-white/70" size={24} />
                  </div>
                  <div className="text-2xl font-regular text-white mb-2">{metric.value}</div>
                  <p className="text-muted-foreground font-light text-sm">{metric.label}</p>
                </div>
              )
            })}
          </div>
        </AnimatedDiv>
      </section>

      {/* CTA */}
      <section className="bg-sk-gold py-20 px-4">
        <AnimatedDiv id="cta-section" className="container mx-auto max-w-3xl text-center" delay={0.3}>
          <h2 className="text-3xl md:text-4xl font-light uppercase text-gray-900 mb-4 tracking-tight">
            Percayakan Kepada Kami untuk Mengelola IT Anda
          </h2>
          <p className="text-gray-600 font-light text-lg max-w-xl mx-auto">
            Hubungi kami untuk mengetahui lebih lanjut tentang layanan managed service kami
          </p>
        </AnimatedDiv>
      </section>
    </div>
  )
}
