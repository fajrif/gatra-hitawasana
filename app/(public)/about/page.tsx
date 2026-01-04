import { PageBanner } from "@/components/ui/page-banner"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { CompanyOverview } from "@/components/company-overview"
import { MissionVisionDirectors } from "@/components/mission-vision-directors"
import { ShowCaseGallery } from "@/components/show-case-gallery"
import { DualCTASection } from "@/components/dual-cta-section"
import { StatsSection } from "@/components/stats-section"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Banner Section */}
      <PageBanner
        title="Tentang PT Gatra Hita Wasana"
        description="Perusahaan IT terdepan yang berkomitmen memberikan solusi teknologi inovatif untuk mendukung transformasi digital bisnis Anda."
        breadcrumbs={[{ label: "Tentang Kami" }]}
        badge={{ label: "Sejak", text: "2003" }}
        className="pb-8 md:pb-16"
      />

      {/* Mobile-only image below banner */}
      <div className="block md:hidden bg-black px-4">
        <Image
          src="/images/ruang-kantor-nariba.png"
          alt="Kantor PT Gatra Hita Wasana"
          width={800}
          height={450}
          className="w-full h-auto grayscale"
        />
      </div>

      {/* Company Overview */}
      <section className="bg-black py-20 px-4">
        <AnimatedDiv id="overview-section" className="container mx-auto max-w-6xl">
          <CompanyOverview />
        </AnimatedDiv>
      </section>

      <section className="bg-sk-gold py-20 px-4">
        <AnimatedDiv id="directors-section" className="container mx-auto max-w-6xl" delay={0.2}>
          <MissionVisionDirectors />
        </AnimatedDiv>
      </section>


      {/* Show Case: PLN Contact Center 123 */}
      <section className="bg-black py-20 px-4">
        <AnimatedDiv id="showcase-section" className="container mx-auto max-w-6xl" delay={0.3}>
          <ShowCaseGallery />
        </AnimatedDiv>
      </section>

      {/* Dual CTA Section */}
      <section className="bg-sk-sea-shade py-20 px-4">
        <AnimatedDiv id="dual-cta-section" className="container mx-auto max-w-6xl" delay={0.4}>
          <DualCTASection />
        </AnimatedDiv>
      </section>

      {/* Stats Section */}
      <StatsSection />

    </div>
  )
}
