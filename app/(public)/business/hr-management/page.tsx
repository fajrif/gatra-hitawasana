'use client'

import { PageBanner } from "@/components/ui/page-banner"
import { HRManagementBackground } from "@/components/ui/hr-management-background"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { StatsSection } from "@/components/stats-section"
import { BenefitsSectionHero } from "@/components/ui/benefits-section-hero"
import { GraduationCap, Award, Clock, CheckCircle } from "lucide-react"

const titleOverview1 = "Solusi Penyediaan "
const titleOverview2 = "Tenaga Kerja Profesional"
const overviewDescription1 = (
  <>
    Perusahaan kami menyediakan beragam talenta profesional yang siap ditempatkan untuk mendukung kebutuhan bisnis klien kami di berbagai sektor industri. Dengan fokus pada penyediaan tenaga kerja terampil, baik <span className="font-bold text-white">teknis</span> maupun <span className="font-bold text-white">non-teknis</span>, kami memastikan setiap individu yang direkrut telah melalui proses seleksi yang ketat berdasarkan kompetensi, pengalaman, dan etika kerja. Talenta yang kami sediakan mencakup <span className="font-bold text-white">Software Developer</span> yang andal dalam pengembangan aplikasi modern, <span className="font-bold text-white">Infrastructure Expert</span> yang berpengalaman dalam pengelolaan sistem dan jaringan, hingga <span className="font-bold text-white">Technical Support</span> yang sigap dalam memberikan dukungan teknis kepada end-user.
  </>
)
const overviewDescription2 = "Melalui pendekatan yang fleksibel dan berorientasi pada kualitas, kami berkomitmen menjadi mitra strategis dalam pemenuhan kebutuhan sumber daya manusia bagi perusahaan Anda. Kami memahami bahwa setiap organisasi memiliki tantangan dan kebutuhan yang berbeda, oleh karena itu kami menghadirkan solusi tenaga kerja yang tepat guna dan siap kerja, untuk membantu meningkatkan efisiensi operasional serta mendorong pertumbuhan bisnis jangka panjang."

const benefits = [
  {
    icon: GraduationCap,
    title: "Talent Terverifikasi",
    description: "Proses seleksi ketat untuk memastikan kualitas"
  },
  {
    icon: Award,
    title: "Berpengalaman",
    description: "Profesional dengan track record terbukti"
  },
  {
    icon: Clock,
    title: "Cepat Tersedia",
    description: "Resource siap kerja dalam waktu singkat"
  },
  {
    icon: CheckCircle,
    title: "Fleksibel",
    description: "Model kontrak sesuai kebutuhan proyek"
  },
]

export default function HRManagementPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Banner Section */}
      <PageBanner
        title="Manajemen Sumber Daya Manusia"
        description="Akses ke talenta teknis terbaik untuk proyek Anda. Kami menyediakan tenaga profesional terampil di berbagai bidang untuk memperkuat tim atau memberikan solusi lengkap."
        breadcrumbs={[
          { label: "Layanan", href: "/business" },
          { label: "HR Management" }
        ]}
        badge={{ label: "Company", text: "Resources" }}
        ctaButtons={[
          { text: "Hire Sekarang", href: "/contact", primary: true },
          { text: "Lihat Layanan", href: "/business", hideOnMobile: true }
        ]}
        microDetails={[
          "Talent Terverifikasi",
          "Talent Berpengalaman",
          "Siap Bekerja"
        ]}
        hideMicroDetailsOnMobile={true}
        backgroundComponent={<HRManagementBackground />}
      />

      {/* HR Overview */}
      <section className="bg-black">
        <AnimatedDiv id="hr-management-overview" className="container mx-auto max-w-2xl md:max-w-3xl">
          <div className="text-center my-16 px-4 md:px-0">
            <h2 className="max-w-2xl text-2xl tracking-tighter font-geist bg-clip-text text-transparent mx-auto md:text-5xl bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] uppercase mb-4">
              {titleOverview1}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-orange-200">
                {titleOverview2}
              </span>
            </h2>
            <p className="mx-auto text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              {overviewDescription1}
            </p>
            <p className="mx-auto text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
              {overviewDescription2}
            </p>
          </div>
        </AnimatedDiv>
      </section>

      {/* Benefits Section */}
      <BenefitsSectionHero
        title={
          <>
            Terbaik Dalam <br />
            Layanan SDM
          </>
        }
        subtitle="Keunggulan layanan talent management kami dalam menyediakan tenaga kerja profesional untuk kebutuhan bisnis Anda."
        features={benefits}
        backgroundImage="/images/square/pic2.jpg"
        ctaButton={{
          text: "Hubungi Kami",
          href: "/contact"
        }}
        className="bg-sk-gold"
        variant="light"
      />

      <StatsSection />
    </div>
  )
}

