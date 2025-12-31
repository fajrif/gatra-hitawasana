import { PageBanner } from "@/components/ui/page-banner"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { Users, Code2, Network, Wrench, GraduationCap, Award, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

const talents = [
  {
    icon: Code2,
    title: "Software Developer",
    description: "Developer full-stack, frontend, dan backend yang mahir dalam framework modern.",
    skills: ["Next.js / React Developer", "Node.js Engineer", "Mobile App Developer", "Database Specialist"]
  },
  {
    icon: Network,
    title: "Infrastructure Expert",
    description: "System administrator dan network engineer untuk manajemen infrastruktur.",
    skills: ["Linux/Windows Admin", "Network Engineer", "DevOps Specialist", "Security Expert"]
  },
  {
    icon: Users,
    title: "Project Manager",
    description: "IT project manager berpengalaman untuk memimpin inisiatif teknologi Anda.",
    skills: ["Agile/Scrum Master", "Technical PM", "Business Analyst", "Product Owner"]
  },
  {
    icon: Wrench,
    title: "Technical Support",
    description: "Profesional help desk dan technical support untuk bantuan end-user.",
    skills: ["IT Support Specialist", "Help Desk Technician", "Technical Trainer", "Documentation Specialist"]
  },
]

const benefits = [
  { icon: GraduationCap, title: "Talent Terverifikasi", desc: "Proses seleksi ketat untuk memastikan kualitas" },
  { icon: Award, title: "Berpengalaman", desc: "Profesional dengan track record terbukti" },
  { icon: Clock, title: "Cepat Tersedia", desc: "Resource siap deploy dalam waktu singkat" },
  { icon: CheckCircle, title: "Fleksibel", desc: "Model kontrak sesuai kebutuhan proyek" },
]

export default function HRManagementPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Banner Section */}
      <PageBanner
        title="Manajemen Sumber Daya Manusia"
        description="Akses ke talenta teknis terbaik untuk proyek Anda. Kami menyediakan profesional terampil di berbagai bidang IT untuk memperkuat tim atau memberikan solusi lengkap."
        breadcrumbs={[
          { label: "Layanan", href: "/business" },
          { label: "HR Management" }
        ]}
        badge={{ label: "Talent", text: "Outsourcing" }}
      />

      {/* Talent Categories */}
      <section className="bg-black py-20 px-4">
        <AnimatedDiv id="talent-grid" className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {talents.map((talent, index) => {
              const Icon = talent.icon
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-8 backdrop-blur"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                    <Icon className="text-white/80" size={24} />
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">{talent.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed mb-6">
                    {talent.description}
                  </p>
                  <ul className="space-y-2">
                    {talent.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-white/50">
                        <span className="w-1 h-1 rounded-full bg-white/40" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </AnimatedDiv>
      </section>

      {/* Benefits Section */}
      <section className="bg-sk-sea-shade py-20 px-4">
        <AnimatedDiv id="benefits-section" className="container mx-auto max-w-6xl" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight">
              Mengapa Memilih Kami
            </h2>
            <p className="text-white/60 font-light text-lg max-w-2xl mx-auto">
              Keunggulan layanan talent management kami
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-6 backdrop-blur text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="text-white/70" size={24} />
                  </div>
                  <h3 className="text-lg font-light text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/50 font-light text-sm">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </AnimatedDiv>
      </section>

      {/* Engagement Models */}
      <section className="bg-sk-gold py-20 px-4">
        <AnimatedDiv id="models-section" className="container mx-auto max-w-6xl" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-4 tracking-tight">
              Model Kerjasama
            </h2>
            <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">
              Pilih model yang sesuai dengan kebutuhan proyek Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Staff Augmentation", desc: "Tambahkan tenaga ahli ke tim existing Anda untuk periode tertentu", duration: "3-12 Bulan" },
              { title: "Project-Based", desc: "Tim dedicated untuk menyelesaikan proyek spesifik dari awal hingga akhir", duration: "Sesuai Proyek" },
              { title: "Managed Team", desc: "Tim lengkap yang dikelola sepenuhnya untuk kebutuhan operasional", duration: "Ongoing" },
            ].map((model, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-900/20 bg-white/40 p-8 backdrop-blur"
              >
                <h3 className="text-xl font-light text-gray-900 mb-3">{model.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4">{model.desc}</p>
                <div className="inline-block px-3 py-1 rounded-full border border-gray-900/20 bg-gray-900/10 text-xs text-gray-700">
                  {model.duration}
                </div>
              </div>
            ))}
          </div>
        </AnimatedDiv>
      </section>

    </div>
  )
}
