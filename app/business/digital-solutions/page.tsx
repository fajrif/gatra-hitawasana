import { PageBanner } from "@/components/page-banner"
import { AnimatedDiv } from "@/components/animated-div"
import { Globe, Smartphone, Database, Cloud, Code, Layers, Cpu, LineChart } from "lucide-react"
import Link from "next/link"

const solutions = [
  {
    icon: Globe,
    title: "Aplikasi Web",
    description: "Aplikasi web modern dan responsif yang dibangun dengan Next.js, React, dan TailwindCSS untuk performa optimal.",
    features: ["Platform E-commerce", "Sistem Manajemen Bisnis", "Portal Pelanggan", "Content Management System"]
  },
  {
    icon: Smartphone,
    title: "Aplikasi Mobile",
    description: "Aplikasi mobile native dan cross-platform untuk iOS dan Android menggunakan React Native.",
    features: ["Aplikasi Consumer", "Solusi Mobile Enterprise", "Aplikasi Field Service", "IoT Companion Apps"]
  },
  {
    icon: Database,
    title: "Sistem Enterprise",
    description: "Aplikasi enterprise skala besar dengan logika bisnis kompleks dan integrasi sistem.",
    features: ["Sistem ERP", "Platform CRM", "Otomasi Workflow", "Dashboard Analytics"]
  },
  {
    icon: Cloud,
    title: "Solusi Cloud",
    description: "Aplikasi cloud-native dan layanan migrasi untuk skalabilitas dan keandalan.",
    features: ["Desain Arsitektur Cloud", "Migrasi Aplikasi", "Aplikasi Serverless", "Pengembangan API"]
  },
]

const technologies = [
  { name: "React / Next.js", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS / GCP", category: "Cloud" },
  { name: "Docker / K8s", category: "DevOps" },
]

export default function DigitalSolutionsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Banner Section */}
      <PageBanner
        title="Solusi Digital"
        description="Pengembangan perangkat lunak kustom yang mentransformasi bisnis Anda. Kami membangun aplikasi web, mobile, dan sistem enterprise dengan teknologi terdepan."
        breadcrumbs={[
          { label: "Layanan", href: "/business" },
          { label: "Solusi Digital" }
        ]}
        badge={{ label: "Custom", text: "Development" }}
      />

      {/* Solutions Grid */}
      <section className="bg-black py-20 px-4">
        <AnimatedDiv id="solutions-grid" className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-8 backdrop-blur"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                    <Icon className="text-white/80" size={24} />
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">{solution.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
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

      {/* Process Section */}
      <section className="bg-sk-sea-shade py-20 px-4">
        <AnimatedDiv id="process-section" className="container mx-auto max-w-6xl" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight">
              Proses Pengembangan
            </h2>
            <p className="text-white/60 font-light text-lg max-w-2xl mx-auto">
              Metodologi terstruktur untuk memastikan kualitas dan ketepatan waktu
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Analisis kebutuhan dan perencanaan proyek", icon: Layers },
              { step: "02", title: "Design", desc: "UI/UX design dan arsitektur sistem", icon: Code },
              { step: "03", title: "Development", desc: "Pengembangan dengan best practices", icon: Cpu },
              { step: "04", title: "Delivery", desc: "Testing, deployment, dan maintenance", icon: LineChart },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-6 backdrop-blur text-center"
                >
                  <div className="text-3xl font-extralight text-white/30 mb-4">{item.step}</div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="text-white/70" size={20} />
                  </div>
                  <h3 className="text-lg font-light text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 font-light text-sm">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </AnimatedDiv>
      </section>

      {/* Technologies */}
      <section className="bg-black py-20 px-4">
        <AnimatedDiv id="tech-section" className="container mx-auto max-w-6xl" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight">
              Teknologi yang Kami Gunakan
            </h2>
            <p className="text-white/60 font-light text-lg max-w-2xl mx-auto">
              Stack teknologi modern untuk solusi yang scalable dan maintainable
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full border border-white/20 bg-[rgba(231,236,235,0.05)]"
              >
                <span className="text-white/80 font-light">{tech.name}</span>
                <span className="text-white/40 text-sm ml-2">• {tech.category}</span>
              </div>
            ))}
          </div>
        </AnimatedDiv>
      </section>

      {/* CTA */}
      <section className="bg-sk-gold py-20 px-4">
        <AnimatedDiv id="cta-section" className="container mx-auto max-w-4xl text-center" delay={0.3}>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Siap Membangun Solusi Anda?
          </h2>
          <p className="text-gray-600 font-light text-lg mb-8 max-w-xl mx-auto">
            Mari diskusikan proyek Anda dan wujudkan ide menjadi kenyataan
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-gray-900 px-8 py-4 text-white font-light hover:bg-gray-800 transition-colors"
          >
            Mulai Proyek
          </Link>
        </AnimatedDiv>
      </section>
    </div>
  )
}
