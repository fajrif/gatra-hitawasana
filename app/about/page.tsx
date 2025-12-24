import { PageBanner } from "@/components/page-banner"
import { AnimatedDiv } from "@/components/animated-div"
import { Target, Users, Award, TrendingUp, Building2, Calendar, Shield, Zap } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Award,
    title: "Keunggulan",
    description: "Kami berkomitmen untuk memberikan solusi terbaik dengan standar kualitas tertinggi dalam setiap proyek."
  },
  {
    icon: Users,
    title: "Kolaborasi",
    description: "Bekerja sama dengan klien sebagai mitra untuk mencapai kesuksesan bersama."
  },
  {
    icon: TrendingUp,
    title: "Inovasi",
    description: "Mengadopsi teknologi terdepan untuk menyelesaikan tantangan bisnis yang kompleks."
  },
  {
    icon: Shield,
    title: "Integritas",
    description: "Menjunjung tinggi kejujuran dan transparansi dalam setiap hubungan bisnis."
  },
]

const milestones = [
  { year: "2010", title: "Didirikan", description: "PT Gatra Hita Wasana memulai perjalanan di industri IT" },
  { year: "2015", title: "Ekspansi", description: "Memperluas layanan ke seluruh Indonesia" },
  { year: "2020", title: "Transformasi Digital", description: "Fokus pada solusi cloud dan digital" },
  { year: "2024", title: "Market Leader", description: "Menjadi mitra terpercaya enterprise dan pemerintahan" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Banner Section */}
      <PageBanner
        title="Tentang PT Gatra Hita Wasana"
        description="Perusahaan IT terdepan yang berkomitmen memberikan solusi teknologi inovatif untuk mendukung transformasi digital bisnis Anda."
        breadcrumbs={[{ label: "Tentang Kami" }]}
        badge={{ label: "Sejak", text: "2010" }}
      />

      {/* Company Overview */}
      <section className="bg-black py-20 px-4">
        <AnimatedDiv id="overview-section" className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extralight text-white tracking-tight">
                Mitra Teknologi <span className="text-white/60">Terpercaya</span>
              </h2>
              <p className="text-white/70 font-light leading-relaxed">
                PT Gatra Hita Wasana adalah perusahaan penyedia solusi teknologi informasi yang telah
                berpengalaman melayani berbagai perusahaan besar dan instansi pemerintahan di Indonesia.
              </p>
              <p className="text-white/70 font-light leading-relaxed">
                Dengan tim profesional yang berpengalaman dan didukung oleh kemitraan strategis dengan
                vendor teknologi terkemuka, kami siap membantu transformasi digital bisnis Anda.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-6 backdrop-blur">
                <Building2 className="w-8 h-8 text-white/60 mb-4" />
                <div className="text-3xl font-extralight text-white mb-1">50+</div>
                <div className="text-sm text-white/60">Klien Enterprise</div>
              </div>
              <div className="rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-6 backdrop-blur">
                <Calendar className="w-8 h-8 text-white/60 mb-4" />
                <div className="text-3xl font-extralight text-white mb-1">14+</div>
                <div className="text-sm text-white/60">Tahun Pengalaman</div>
              </div>
              <div className="rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-6 backdrop-blur">
                <Users className="w-8 h-8 text-white/60 mb-4" />
                <div className="text-3xl font-extralight text-white mb-1">100+</div>
                <div className="text-sm text-white/60">Tenaga Ahli</div>
              </div>
              <div className="rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-6 backdrop-blur">
                <Zap className="w-8 h-8 text-white/60 mb-4" />
                <div className="text-3xl font-extralight text-white mb-1">200+</div>
                <div className="text-sm text-white/60">Proyek Selesai</div>
              </div>
            </div>
          </div>
        </AnimatedDiv>
      </section>

      {/* Mission & Vision */}
      <section className="bg-sk-sea-shade py-20 px-4">
        <AnimatedDiv id="mission-vision-section" className="container mx-auto max-w-6xl" delay={0.1}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-8 backdrop-blur">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <Target className="text-white/80" size={24} />
              </div>
              <h2 className="text-2xl font-light text-white mb-4">Misi Kami</h2>
              <p className="text-white/70 font-light leading-relaxed">
                Menyediakan solusi dan layanan IT komprehensif yang memungkinkan klien kami mencapai
                tujuan bisnis melalui teknologi inovatif, sumber daya ahli, dan infrastruktur yang andal.
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-8 backdrop-blur">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <TrendingUp className="text-white/80" size={24} />
              </div>
              <h2 className="text-2xl font-light text-white mb-4">Visi Kami</h2>
              <p className="text-white/70 font-light leading-relaxed">
                Menjadi mitra solusi IT paling terpercaya di Indonesia, diakui atas keunggulan dalam
                penyampaian teknologi, pelayanan pelanggan, dan inovasi berkelanjutan.
              </p>
            </div>
          </div>
        </AnimatedDiv>
      </section>

      {/* Values */}
      <section className="bg-black py-20 px-4">
        <AnimatedDiv id="values-section" className="container mx-auto max-w-6xl" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight">
              Nilai-Nilai Kami
            </h2>
            <p className="text-white/60 font-light text-lg max-w-2xl mx-auto">
              Prinsip yang memandu setiap langkah kami dalam melayani klien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-6 backdrop-blur text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="text-white/80" size={24} />
                  </div>
                  <h3 className="text-lg font-light text-white mb-2">{value.title}</h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </AnimatedDiv>
      </section>

      {/* Timeline/Milestones */}
      <section className="bg-sk-sea-shade py-20 px-4">
        <AnimatedDiv id="milestones-section" className="container mx-auto max-w-6xl" delay={0.3}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight text-white mb-4 tracking-tight">
              Perjalanan Kami
            </h2>
            <p className="text-white/60 font-light text-lg max-w-2xl mx-auto">
              Milestone penting dalam perjalanan PT Gatra Hita Wasana
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative rounded-2xl border border-white/20 bg-[rgba(231,236,235,0.08)] p-6 backdrop-blur"
              >
                <div className="text-4xl font-extralight text-white/40 mb-4">{milestone.year}</div>
                <h3 className="text-lg font-light text-white mb-2">{milestone.title}</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedDiv>
      </section>

      {/* CTA */}
      <section className="bg-sk-gold py-20 px-4">
        <AnimatedDiv id="cta-section" className="container mx-auto max-w-4xl text-center" delay={0.4}>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Bergabung Bersama Kami
          </h2>
          <p className="text-gray-600 font-light text-lg mb-8 max-w-xl mx-auto">
            Kami selalu mencari talenta berbakat untuk bergabung dengan tim kami yang terus berkembang
          </p>
          <Link
            href="/about/career"
            className="inline-block rounded-full bg-gray-900 px-8 py-4 text-white font-light hover:bg-gray-800 transition-colors"
          >
            Lihat Lowongan
          </Link>
        </AnimatedDiv>
      </section>
    </div>
  )
}
