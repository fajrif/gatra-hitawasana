"use client"

import { HeroSectionApp } from "@/components/ui/hero-section-app"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { DigitalSolutionOverview } from "@/components/digital-solutions-overview"
import { Features } from "@/components/ui/features"
import SmallScaleArchitecture from "@/components/architectures/small-scale"
import MediumComplexityArchitecture from "@/components/architectures/medium-complexity"
import EventDrivenArchitecture from "@/components/architectures/event-driven"
import { StatsSection } from "@/components/stats-section"

const architectureFeatures = [
  {
    id: 1,
    title: "Small-Scale Architecture",
    description: "Arsitektur monolitik yang ideal untuk startup dan bisnis kecil. Deployment sederhana, biaya efektif, dan mudah dikelola dengan satu database terpusat.",
    diagram: <SmallScaleArchitecture />,
  },
  {
    id: 2,
    title: "Medium-Complexity Architecture",
    description: "Arsitektur modular untuk perusahaan berkembang. Integrasi API yang kuat, skalabilitas horizontal, dan pemisahan layanan untuk performa optimal. Ideal untuk SaaS, Marketplace, Traffic menengah-besar",
    diagram: <MediumComplexityArchitecture />,
  },
  {
    id: 3,
    title: "Event-Driven Architecture",
    description: "Arsitektur sistem dimana komponen saling berkomunikasi melalui events, membuat sistem lebih fleksibel dan scalable, lebih tahan akan kegagalan (resilient) dan sangat ideal untuk sistem besar & high growth",
    diagram: <EventDrivenArchitecture />,
  },
];

export default function DigitalSolutionsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <HeroSectionApp
        title="Solusi Digital & Inovasi"
        subtitle={{
          regular: "Wujudkan visi digital Anda dengan ",
          gradient: "pengembangan kustom perangkat lunak"
        }}
        description="Kami menyediakan solusi digital lengkap untuk transformasi bisnis Anda, dari pengembangan aplikasi web dan mobile hingga integrasi sistem enterprise dengan teknologi terdepan."
        ctaText="Konsultasi Sekarang"
        ctaHref="#digital-solutions-overview"
        gridOptions={{
          angle: 65,
          opacity: 0.3,
          cellSize: 50,
          lightLineColor: "#4a4a4a",
          darkLineColor: "#2a2a2a",
        }}
      />

      {/* Digital Solutions Overview */}
      <section className="bg-black py-10 md:py-20 px-4">
        <AnimatedDiv id="digital-solutions-overview" className="container mx-auto max-w-6xl" delay={0.1}>
          <DigitalSolutionOverview />
        </AnimatedDiv>
      </section>

      {/* Application Architecture */}
      <section className="bg-black">
        <Features
          title="Arsitektur menentukan ketahanan Sistem Anda"
          subTitle="Menyediakan banyak pilihan model arsitektur"
          features={architectureFeatures}
        />
      </section>

      <StatsSection />
    </div>
  )
}
