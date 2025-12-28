import { HeroSectionApp } from "@/components/ui/hero-section-app"
import { AnimatedDiv } from "@/components/animated-div"
import { DigitalSolutionOverview } from "@/components/digital-solutions-overview"
import { Globe, Smartphone, Database, Cloud, Code, Layers, Cpu, LineChart } from "lucide-react"
import Link from "next/link"

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

    </div>
  )
}
