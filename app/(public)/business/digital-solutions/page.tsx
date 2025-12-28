"use client"

import { HeroSectionApp } from "@/components/ui/hero-section-app"
import { AnimatedDiv } from "@/components/animated-div"
import { DigitalSolutionOverview } from "@/components/digital-solutions-overview"
import { Features } from "@/components/ui/features"
import { Globe, Smartphone, Database, Cloud, Code, Layers, Cpu, LineChart, Building2, Server, Network } from "lucide-react"
import Link from "next/link"

const architectureFeatures = [
  {
    id: 1,
    icon: Building2,
    title: "Small-Scale Architecture",
    description: "Arsitektur monolitik yang ideal untuk startup dan bisnis kecil. Deployment sederhana, biaya efektif, dan mudah dikelola dengan satu database terpusat.",
    image: "/images/architectures/small-scale-architecture.jpg",
  },
  {
    id: 2,
    icon: Server,
    title: "Medium-Scale Architecture",
    description: "Arsitektur modular untuk perusahaan berkembang. Integrasi API yang kuat, skalabilitas horizontal, dan pemisahan layanan untuk performa optimal.",
    image: "/images/architectures/medium-scale-architecture.jpg",
  },
  {
    id: 3,
    icon: Network,
    title: "Large-Scale Architecture",
    description: "Arsitektur microservices untuk enterprise besar. Cloud-native, containerization, auto-scaling, dan sistem terdistribusi untuk traffic tinggi.",
    image: "/images/architectures/large-scale-architecture.jpg",
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
          gradient: "pengembangan perangkat lunak kustom"
        }}
        description="Kami menyediakan solusi digital lengkap untuk transformasi bisnis Anda, dari pengembangan aplikasi web dan mobile hingga integrasi sistem enterprise dengan teknologi terdepan."
        ctaText="Konsultasi Gratis"
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
      <section className="bg-black py-20 px-4">
        <AnimatedDiv id="digital-solutions-overview" className="container mx-auto max-w-6xl" delay={0.1}>
          <DigitalSolutionOverview />
        </AnimatedDiv>
      </section>

      {/* Application Architecture */}
      <section className="bg-sk-gold">
        <Features
          primaryColor="sky-500"
          progressGradientLight="bg-gradient-to-r from-sky-400 to-sky-500"
          progressGradientDark="bg-gradient-to-r from-sky-300 to-sky-400"
          features={architectureFeatures}
        />
      </section>

    </div>
  )
}
